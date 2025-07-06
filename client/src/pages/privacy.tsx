import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="pt-16">
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-dark mb-8 text-center">Privacy Policy</h1>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div>
                  <p className="text-neutral leading-relaxed">
                    Vortex Strategies Limited ("Vortex Strategies", "we", "our", or "us") is committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, store, and share your personal and non-personal information when you use our websites, games, applications, and services (collectively, the "Services"). This includes any services provided under the Vortex Strategies Limited brand and on platforms such as Facebook, Google Play Store, Apple App Store, Amazon, and others.
                  </p>
                  <p className="text-neutral leading-relaxed mt-4">
                    By using our Services, you agree to the collection and use of your information in accordance with this Policy.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Scope of This Policy</h3>
                  <ul className="space-y-2 text-neutral">
                    <li>• Our websites, including www.vortexstratergieslimited.uk and affiliated domains</li>
                    <li>• Our mobile apps and games available on third-party platforms</li>
                    <li>• Any services provided under Vortex Strategies Limited branding</li>
                    <li>• User interactions via social networks like Facebook or Google</li>
                    <li>• Our communications (e.g. newsletters, support emails)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Information We Collect</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Information You Provide Voluntarily</h4>
                      <ul className="space-y-1 text-neutral">
                        <li>• Name, email address, postal address, phone number</li>
                        <li>• Date of birth, gender, country of residence</li>
                        <li>• Login credentials (for social login like Facebook)</li>
                        <li>• Public profile information (photo, username, etc.)</li>
                        <li>• Payment and billing information (handled by platform stores)</li>
                        <li>• Feedback or support queries</li>
                        <li>• Contest or event entries</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Information Collected Automatically</h4>
                      <ul className="space-y-1 text-neutral">
                        <li>• Device identifiers (IDFA, Android ID, IMEI, etc.)</li>
                        <li>• IP address, browser type, OS, device model</li>
                        <li>• Usage data (session activity, crashes, gameplay behavior)</li>
                        <li>• Geo-location (based on your device permissions)</li>
                        <li>• Advertising interaction (impressions, clicks, conversions)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Use of Your Information</h3>
                  <ul className="space-y-2 text-neutral">
                    <li>• Provide and improve our games and services</li>
                    <li>• Customize user experiences</li>
                    <li>• Communicate updates, support messages, promotions, and contests</li>
                    <li>• Monitor engagement and service performance</li>
                    <li>• Prevent fraud, enforce terms, and comply with laws</li>
                  </ul>
                  <p className="text-neutral mt-4">
                    Your email may be used to send you updates or promotional messages. You can opt out at any time.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-4">In-App Purchases and Platform Sharing</h3>
                  <p className="text-neutral">
                    All purchases made within our apps are handled by the respective platform (Google, Apple, etc.). We do not collect or store your financial data. We may receive confirmation of purchase details from these platforms for support or analytics purposes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Social Network Integration</h3>
                  <p className="text-neutral mb-2">
                    If you choose to connect your account with Facebook or another social platform:
                  </p>
                  <ul className="space-y-1 text-neutral">
                    <li>• We may receive your name, profile photo, friends list, email, and birthday</li>
                    <li>• You can log in on multiple devices and sync game progress</li>
                    <li>• Your friends may see your name and game progress and vice versa</li>
                    <li>• We will never post to your account without explicit permission</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Children's Privacy</h3>
                  <p className="text-neutral mb-2">
                    We do not knowingly collect personal information from children under 13. For games or features directed at children, only non-personal data (e.g. device ID) may be collected for internal purposes.
                  </p>
                  <p className="text-neutral">
                    If you are a parent and believe your child has submitted personal info without consent, please contact us at vortexgamingstaff@gmail.com and we will delete the data.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Cookies and Tracking Technologies</h3>
                  <p className="text-neutral mb-2">We use cookies to:</p>
                  <ul className="space-y-1 text-neutral">
                    <li>• Track usage</li>
                    <li>• Improve user experience</li>
                    <li>• Serve personalized ads</li>
                  </ul>
                  <p className="text-neutral mt-2">
                    You can disable cookies in your browser, but some features may not function properly.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Third-Party Services and Ads</h3>
                  <p className="text-neutral mb-2">
                    Our apps and sites may contain ads and analytics from third-party providers, which may collect:
                  </p>
                  <ul className="space-y-1 text-neutral">
                    <li>• Device ID</li>
                    <li>• IP address</li>
                    <li>• Location</li>
                    <li>• App usage behavior</li>
                  </ul>
                  <p className="text-neutral mt-2">
                    Ad networks we may work with include: Google AdMob, Unity Ads, Vungle, Chartboost, Adcolony, Heyzap
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Information Sharing</h3>
                  <ul className="space-y-2 text-neutral">
                    <li>• With service providers that help operate our Services</li>
                    <li>• With advertisers or analytics services in anonymized or aggregate form</li>
                    <li>• If required by law, subpoena, legal process, or government request</li>
                    <li>• During a merger, acquisition, or sale of our business assets</li>
                  </ul>
                  <p className="text-neutral font-semibold mt-4">
                    We will never sell your personal information.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Data Security</h3>
                  <p className="text-neutral">
                    We take reasonable steps to protect your information but cannot guarantee absolute security. Always take precautions such as using strong passwords and logging out after sessions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Your Rights & Choices</h3>
                  <ul className="space-y-2 text-neutral">
                    <li>• Access or correct your information via your profile or by contacting us</li>
                    <li>• Request deletion of your data (unless we are legally required to keep it)</li>
                    <li>• Opt out of emails using unsubscribe links or contact email</li>
                    <li>• Contact: vortexgamingstaff@gmail.com</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Policy Updates</h3>
                  <p className="text-neutral">
                    We may revise this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our Services implies acceptance of the changes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Contact Us</h3>
                  <ul className="space-y-1 text-neutral">
                    <li>• Email: vortexgamingstaff@gmail.com</li>
                    <li>• Website: www.vortexstratergieslimited.uk</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
