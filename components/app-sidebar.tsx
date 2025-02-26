import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { maps } from '@/lib/utils';
import Link from 'next/link';
import { ModeToggle } from './theme_trigger';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex gap-2 items-center text-xl font-bold">
              [IS]Nades <ModeToggle />
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {maps
                .sort((a, b) => a.label.localeCompare(b.label))
                .map(item => (
                  <SidebarMenuItem key={item.id}>
                    <Link href={`/${item.value}`} className="text-md font-bold">
                      <SidebarMenuButton asChild>
                        <span key={item.id}>{item.label}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
