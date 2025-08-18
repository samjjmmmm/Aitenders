import Header from "@/components/header";
import { MdDownload, MdStore, MdDescription, MdCheck } from "react-icons/md";

export default function WordAddonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Word Add-in Content */}
      <section className="py-16 md:py-20 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-aitenders-dark-blue mb-6">
              Smart Draft Word Add-in
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get started with just a few clicks
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-aitenders-light-blue rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-aitenders-primary-blue text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  1
                </div>
                <h2 className="text-2xl font-bold text-aitenders-dark-blue">
                  Go on the Microsoft store <a href="https://appsource.microsoft.com/en-ca/product/office/wa200002578?tab=overview" target="_blank" rel="noopener noreferrer" className="text-aitenders-primary-blue hover:underline">just here</a>
                </h2>
              </div>
              <div className="flex items-center space-x-4">
                <MdStore className="w-8 h-8 text-aitenders-primary-blue" />
                <p className="text-gray-700 leading-relaxed">
                  Click on 'Get it now' and download the add-in.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-aitenders-medium-blue rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-aitenders-primary-blue text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  2
                </div>
                <h2 className="text-2xl font-bold text-aitenders-dark-blue">
                  Open Microsoft Word
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MdDescription className="w-6 h-6 text-aitenders-primary-blue mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    Navigate to the top menu bar and click on the <strong>Insert</strong> tab. Find the Add-ins group and click on 'Get Add-ins' or Store (the wording may differ slightly depending on your version of Word).
                  </p>
                </div>

                <div className="ml-10 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    A window will pop up with the Office Store. Use the search bar to find the specific add-in you want to install.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Once you locate the plugin, click on it. Then, click the <strong>Add</strong> or <strong>Install</strong> button (depending on the add-in) and confirm the installation.
                  </p>
                  
                  <div className="bg-aitenders-light-blue rounded-lg p-4">
                    <p className="text-aitenders-dark-blue text-sm">
                      <strong>Note:</strong> Some add-ins might require you to sign in with a Microsoft account.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Step - Confirmation */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <MdCheck className="w-8 h-8 text-green-600 mr-4" />
                <h3 className="text-xl font-bold text-green-800">
                  Installation Complete
                </h3>
              </div>
              <p className="text-green-700 leading-relaxed">
                The add-in will install, and you'll see a confirmation once it's ready to use. The plugin's commands may now be available in Word's ribbon or a separate panel.
              </p>
            </div>

            {/* Additional Help Section */}
            <div className="bg-aitenders-light-blue rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-aitenders-dark-blue mb-4">
                Need Additional Support?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you encounter any issues during installation or have questions about using the Smart Draft Word Add-in, our support team is here to help.
              </p>
              <div className="bg-white rounded-lg p-4 inline-block">
                <p className="text-aitenders-dark-blue font-medium">
                  Contact: support@aitenders.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}