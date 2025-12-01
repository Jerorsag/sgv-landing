import React from 'react';
import * as LucideIcons from 'lucide-react';

interface LucideIconProps extends React.SVGProps<SVGSVGElement> {
	name: keyof typeof LucideIcons;
}

export default function LucideIcon({ name, ...props }: LucideIconProps) {
	const IconComponent = LucideIcons[name] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
	
	if (!IconComponent) {
		console.warn(`Icon "${name}" not found in lucide-react`);
		return null;
	}
	
	return React.createElement(IconComponent, props);
}

