import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MdClose, MdTrendingUp, MdVerified, MdTrackChanges, MdGroups, MdArrowForward } from 'react-icons/md';

interface ToppingModalProps {
  isOpen: boolean;
  onClose: () => void;
  topping: {
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    iconColor: string;
    integration: {
      title: string;
      steps: string[];
      visual: string;
    };
    valueProposition: {
      buyer: {
        title: string;
        benefits: string[];
      };
      user: {
        title: string;
        benefits: string[];
      };
    };
    impact: {
      kpi1: { label: string; value: string; icon: React.ComponentType<{ className?: string }> };
      kpi2: { label: string; value: string; icon: React.ComponentType<{ className?: string }> };
      kpi3: { label: string; value: string; icon: React.ComponentType<{ className?: string }> };
    };
  };
}

export default function ToppingModal({ isOpen, onClose, topping }: ToppingModalProps) {
  if (!topping) return null;

  const IconComponent = topping.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 ${topping.iconColor.replace('text-', 'bg-').replace('-600', '-100')} rounded-2xl flex items-center justify-center`}>
                <IconComponent className={`w-8 h-8 ${topping.iconColor}`} />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold text-gray-900">{topping.name}</DialogTitle>
                <p className="text-gray-600 mt-1">{topping.description}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <MdClose className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Integration in User Journey */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Intégration dans le parcours utilisateur</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">{topping.integration.title}</h4>
              
              {/* Visual Flow */}
              <div className="flex items-center justify-between mb-4 overflow-x-auto">
                {topping.integration.steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-white rounded-lg px-4 py-2 shadow-sm border min-w-[150px] text-center">
                      <div className="text-sm font-medium text-gray-900">{step}</div>
                    </div>
                    {index < topping.integration.steps.length - 1 && (
                      <MdArrowForward className="w-5 h-5 text-gray-400 mx-2 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-gray-700">{topping.integration.visual}</p>
              </div>
            </div>
          </section>

          {/* Value Proposition */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Proposition de valeur</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Buyer Benefits */}
              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                  <MdVerified className="w-5 h-5 mr-2" />
                  {topping.valueProposition.buyer.title}
                </h4>
                <ul className="space-y-2">
                  {topping.valueProposition.buyer.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-green-800">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* User Benefits */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <MdGroups className="w-5 h-5 mr-2" />
                  {topping.valueProposition.user.title}
                </h4>
                <ul className="space-y-2">
                  {topping.valueProposition.user.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-blue-800">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Impact KPIs */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact mesuré</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(topping.impact).map(([key, kpi]) => {
                const KpiIcon = kpi.icon;
                return (
                  <div key={key} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <KpiIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</div>
                    <div className="text-sm text-gray-600">{kpi.label}</div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}