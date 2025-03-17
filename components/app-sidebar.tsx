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
import Image from 'next/image';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex gap-2 items-center text-xl font-bold">
              <Link href={'/'} className="block">
                [IS]Nades
              </Link>
              <ModeToggle />
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {maps
                .sort((a, b) => a.label.localeCompare(b.label))
                .map(item => (
                  <SidebarMenuItem key={item.id}>
                    <Link
                      href={`/${item.value}`}
                      className="text-md font-bold flex items-center justify-between"
                    >
                      <SidebarMenuButton asChild>
                        <span className="flex items-center">
                          <Image
                            src={item.icon}
                            width={30}
                            height={30}
                            alt="emblem"
                          />
                          {item.label}
                        </span>
                      </SidebarMenuButton>
                      {item.new && (
                        <span
                          className="ml-2 items-center gap-2 px-2 py-1 rounded-full 
                          bg-gradient-to-r from-red-500/20 to-orange-500/20 
                          border border-red-500/30 
                          text-red-400 text-xs font-semibold
                          shadow-lg shadow-red-500/10
                          backdrop-blur-sm"
                        >
                          NEW
                        </span>
                      )}
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
