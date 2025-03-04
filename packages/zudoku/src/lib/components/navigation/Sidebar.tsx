import { useEffect, useRef } from "react";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DrawerContent, DrawerTitle } from "../../ui/Drawer.js";
import { scrollIntoViewIfNeeded } from "../../util/scrollIntoViewIfNeeded.js";
import { useCurrentNavigation } from "../context/ZudokuContext.js";
import { Slotlet } from "../SlotletProvider.js";
import { SidebarItem } from "./SidebarItem.js";
import { SidebarWrapper } from "./SidebarWrapper.js";

export const Sidebar = ({
  onRequestClose,
}: {
  onRequestClose?: () => void;
}) => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const navigation = useCurrentNavigation();

  useEffect(() => {
    const active = navRef.current?.querySelector('[aria-current="page"]');
    scrollIntoViewIfNeeded(active ?? null);
  }, []);

  return (
    <>
      <SidebarWrapper
        ref={navRef}
        pushMainContent={navigation.sidebar.length > 0}
      >
        <Slotlet name="zudoku-before-navigation" />
        {navigation.sidebar.map((item) => (
          <SidebarItem key={item.label} item={item} />
        ))}
        <Slotlet name="zudoku-after-navigation" />
      </SidebarWrapper>
      <DrawerContent
        className="lg:hidden h-[100dvh] left-0 w-[320px] rounded-none"
        aria-describedby={undefined}
      >
        <div className="p-4 overflow-y-auto overscroll-none">
          <VisuallyHidden>
            <DrawerTitle>Sidebar</DrawerTitle>
          </VisuallyHidden>
          {navigation.sidebar.map((item) => (
            <SidebarItem
              key={item.label}
              item={item}
              onRequestClose={onRequestClose}
            />
          ))}
        </div>
      </DrawerContent>
    </>
  );
};
