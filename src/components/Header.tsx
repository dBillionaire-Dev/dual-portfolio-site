
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface HeaderProps {
  activeRole: 'virtual-assistant' | 'product-manager';
  onRoleChange: (role: 'virtual-assistant' | 'product-manager') => void;
}

const Header = ({ activeRole, onRoleChange }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-lg sm:text-xl font-bold text-primary">Aniekan-Abasi Udofia</div>

          {/* Toggle Navigation */}
          <ToggleGroup
            type="single"
            value={activeRole}
            onValueChange={(value) => value && onRoleChange(value as 'virtual-assistant' | 'product-manager')}
            className="bg-muted rounded-lg p-1"
          >
            <ToggleGroupItem
              value="virtual-assistant"
              className="text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              Virtual Assistant
            </ToggleGroupItem>
            <ToggleGroupItem
              value="product-manager"
              className="text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              Product Manager
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </header>
  );
};

export default Header;
