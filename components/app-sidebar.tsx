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
                    <Link href={`/${item.value}`} className="text-md font-bold">
                      <SidebarMenuButton asChild>
                        <span key={item.id}>
                          <Image
                            src={item.icon}
                            width={30}
                            height={30}
                            alt="emblem"
                          />
                          {item.label}
                        </span>
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
