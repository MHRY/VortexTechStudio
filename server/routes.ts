import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
    files: 5
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", upload.array("files", 5), async (req, res) => {
    try {
      const { name, email, projectType, message } = req.body;
      
      // Validate the request body
      const contactData = insertContactSchema.parse({
        name,
        email,
        projectType,
        message,
        files: req.files ? (req.files as Express.Multer.File[]).map(file => file.originalname) : []
      });

      // Store the contact
      const contact = await storage.createContact(contactData);

      // In a real application, you would:
      // 1. Store files in a cloud storage service
      // 2. Send email notifications
      // 3. Process the contact request

      res.json({ 
        message: "Contact request received successfully! We'll respond within 24 hours.",
        id: contact.id
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        message: "Failed to process contact request"
      });
    }
  });

  // Booking appointment endpoint
  app.post("/api/booking", async (req, res) => {
    try {
      const { name, email, date, time, message } = req.body;
      
      if (!name || !email || !date || !time) {
        return res.status(400).json({ error: "Name, email, date, and time are required" });
      }

      // Store booking as a contact with special type
      const bookingData = insertContactSchema.parse({
        name,
        email,
        projectType: "meeting-booking",
        message: `Booking Request:
Date: ${new Date(date).toLocaleDateString()}
Time: ${time}
${message ? `Message: ${message}` : ''}

Send confirmation to: info@vortexstratergieslimited.uk`,
        files: []
      });

      const booking = await storage.createContact(bookingData);

      res.json({ 
        message: "Booking request submitted successfully! We'll confirm your appointment via email.",
        id: booking.id 
      });
    } catch (error) {
      console.error("Booking error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        message: "Failed to process booking request"
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "operational", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);

  return httpServer;
}
