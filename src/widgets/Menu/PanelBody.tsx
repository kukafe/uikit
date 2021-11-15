import React from "react";
import styled from "styled-components";
import Tooltip from '@mui/material/Tooltip';
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const _location = useLocation();
  let location = (_location as any).location ? (_location as any).location : _location 

  // console.log("location", location, _location)
  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        // console.log(entry.items, location.pathname)
        if (entry.items) {
          return (

            <Accordion
            key={entry.label}
            isPushed={isPushed}
            pushNav={pushNav}
            icon={iconElement}
            label={entry.label}
            initialOpenState={entry.initialOpenState}
              className={calloutClass}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary isActive={(item.href==='/') ? location.pathname==='/' : location.pathname.startsWith(item.href)} onClick={handleClick}>
                      {/* @ts-ignore */}
                      <Tooltip title={item.tooltip?item.tooltip:null}>
                        <MenuLink href={item.href}>{item.label}</MenuLink>
                      </Tooltip>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={(entry.href === '/') ? location.pathname === '/' : location.pathname.startsWith(entry.href as string)} className={calloutClass}>
             {/* @ts-ignore */}
            <Tooltip title={entry.tooltip?entry.tooltip:null}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
            </Tooltip>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
