import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useMatch } from "react-router";
import type { SidebarItemCategory } from "../../../config/validators/SidebarSchema.js";
import { cn } from "../../util/cn.js";
import { joinPath } from "../../util/joinPath.js";
import { navigationListItem, SidebarItem } from "./SidebarItem.js";
import { useIsCategoryOpen } from "./utils.js";

export const SidebarCategory = ({
  category,
  onRequestClose,
}: {
  category: SidebarItemCategory;
  onRequestClose?: () => void;
}) => {
  const isCategoryOpen = useIsCategoryOpen(category);
  const [hasInteracted, setHasInteracted] = useState(false);

  const isCollapsible = category.collapsible ?? true;
  const isCollapsed = category.collapsed ?? true;
  const isDefaultOpen = Boolean(
    !isCollapsible || !isCollapsed || isCategoryOpen,
  );
  const [open, setOpen] = useState(isDefaultOpen);
  const isActive = useMatch(category.link?.id ?? "");

  useEffect(() => {
    // this is triggered when an item from the sidebar is clicked
    // and the sidebar, enclosing this item, is not opened
    if (isCategoryOpen) {
      setOpen(true);
    }
  }, [isCategoryOpen]);

  const ToggleButton = isCollapsible && (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        setOpen((prev) => !prev);
        setHasInteracted(true);
      }}
    >
      <ChevronRightIcon
        size={16}
        className={cn(
          hasInteracted && "transition",
          "shrink-0 group-data-[state=open]:rotate-90",
        )}
      />
    </button>
  );

  const icon = category.icon && (
    <category.icon
      size={16}
      className={cn("align-[-0.125em] ", isActive && "text-primary")}
    />
  );

  const styles = navigationListItem({
    className: [
      "text-start font-medium",
      isCollapsible || typeof category.link !== "undefined"
        ? "cursor-pointer"
        : "cursor-default hover:bg-transparent",
    ],
  });

  return (
    <Collapsible.Root
      className="flex flex-col"
      defaultOpen={isDefaultOpen}
      open={open}
      onOpenChange={() => setOpen(true)}
    >
      <Collapsible.Trigger className="group" asChild disabled={!isCollapsible}>
        {category.link?.type === "doc" ? (
          <NavLink
            to={joinPath(category.link.id)}
            className={styles}
            onClick={() => {
              setHasInteracted(true);
              // if it is the current path and closed then open it because there's no path change to trigger the open
              if (isActive && !open) {
                setOpen(true);
              }
            }}
          >
            {icon}
            <div
              className={cn(
                "flex items-center gap-2 justify-between w-full",
                isActive ? "text-primary" : "text-foreground/80",
              )}
            >
              <div className="truncate">{category.label}</div>
              {ToggleButton}
            </div>
          </NavLink>
        ) : (
          <div onClick={() => setHasInteracted(true)} className={styles}>
            {icon}
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-2 truncate w-full">{category.label}</div>
              {ToggleButton}
            </div>
          </div>
        )}
      </Collapsible.Trigger>
      <Collapsible.Content
        className={cn(
          // CollapsibleContent class is used to animate and it should only be applied when the user has triggered the toggle
          hasInteracted && "CollapsibleContent",
          category.items.length === 0 && "hidden",
          "ms-6 my-1",
        )}
      >
        <ul className="relative after:absolute after:-left-[--padding-nav-item] after:translate-x-[1.5px] after:top-0 after:bottom-0 after:w-px after:bg-border">
          {category.items.map((item) => (
            <SidebarItem
              key={
                ("id" in item ? item.id : "") +
                ("href" in item ? item.href : "") +
                item.label
              }
              onRequestClose={onRequestClose}
              item={item}
            />
          ))}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
