// @/components/NavLink.tsx

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation"; 
import { forwardRef } from "react";
import { cn } from "@/shared/utils/merge";

// Define the correct props for the Next.js Link component
interface NavLinkCompatProps extends Omit<LinkProps, "className" | "href"> {
  // We rename 'to' to 'href' for consistency with Next.js
  href: string; 
  className?: string;
  activeClassName?: string;
  // 'pendingClassName' is not supported as Next.js handles loading differently
  // We'll omit it for simplicity, but you could implement custom logic if needed.
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    // Get the current URL path from the client side
    const pathname = usePathname();

    // Check if the current route matches the link's href
    // We use startsWith for common patterns like '/dashboard' matching '/dashboard/settings'
    const isActive = pathname.startsWith(href) && href !== '/';
    // Special handling for the root path '/'
    const isRootActive = pathname === '/' && href === '/';

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          className, 
          (isActive || isRootActive) && activeClassName
        )}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };