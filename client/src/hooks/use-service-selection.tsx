import { createContext, useContext, useState, ReactNode } from "react";

interface ServiceSelection {
  projectType: string;
  title: string;
}

interface ServiceSelectionContext {
  selectedService: ServiceSelection | null;
  selectService: (projectType: string, title: string) => void;
  clearSelection: () => void;
}

const ServiceSelectionContext = createContext<ServiceSelectionContext | undefined>(undefined);

export const ServiceSelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedService, setSelectedService] = useState<ServiceSelection | null>(null);

  const selectService = (projectType: string, title: string) => {
    setSelectedService({ projectType, title });
  };

  const clearSelection = () => {
    setSelectedService(null);
  };

  return (
    <ServiceSelectionContext.Provider value={{ selectedService, selectService, clearSelection }}>
      {children}
    </ServiceSelectionContext.Provider>
  );
};

export const useServiceSelection = () => {
  const context = useContext(ServiceSelectionContext);
  if (context === undefined) {
    throw new Error("useServiceSelection must be used within a ServiceSelectionProvider");
  }
  return context;
};
