import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  return (
    <div className="sticky flex h-max justify-center">
      <NavigationMenu>
        <div className="flex justify-between">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Girls</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex w-32 flex-col p-4">
                  <NavigationMenuLink href="/girls/staff">Staff</NavigationMenuLink>
                  <NavigationMenuLink href="/girls/new-faces">New Faces</NavigationMenuLink>
                  <NavigationMenuLink href="/girls/teens">Teens</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Boys</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex w-32 flex-col p-4">
                  <NavigationMenuLink href="/boys/staff">Staff</NavigationMenuLink>
                  <NavigationMenuLink href="/boys/new-faces">New Faces</NavigationMenuLink>
                  <NavigationMenuLink href="/boys/teens">Teens</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="/academia"
              >
                Academia
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="/contacto"
              >
                Contacto
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </div>
  );
}
