"use client";

import styled from "styled-components";
import GeniusText from "../GeniusText/GeniusText";
import Logo from "../../../public/assets/images/logo-geniorama-blanco.svg";
import menuPrincipal from "@/MenuItems/menuPrincipal";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import GeniusLink from "../GeniusLink/GeniusLink";
import { usePathname } from "@/i18n/routing";

interface MenuResponsiveProps {
  handleClose: any;
}

export default function MenuResponsive(props: MenuResponsiveProps) {
  const tCommon = useTranslations("common");
  const locale = useLocale()
  const pathname = usePathname();
  const linkWithLocaleEn = `/en${pathname}`
  console.log('linkWithLocaleEn', linkWithLocaleEn);

  const LinkItem = styled.span`
    font-family: "Druk Cond Trial", sans-serif;
    font-size: ${locale === 'en' ? '42vw' : '30vw'};
    line-height: 0.9em;
    text-transform: uppercase;
    display: block;
  `;

  const ButtonClose = styled.button`
    width: 40px;
    height: 40px;
    position: absolute;
    right: 10px;
    top: 10px;
    span {
      width: 100%;
      display: block;
      height: 2px;
      background: white;
      position: absolute;
    }
    span:nth-child(1) {
      transform: rotate(-45deg);
    }
    span:nth-child(2) {
      transform: rotate(45deg);
    }
  `;

  return (
    <div className="text-white p-3 relative">
      <div className="font-light text-lg">
        <span>
          <GeniusText>html</GeniusText>
        </span>
        <span className="block ml-3">
          <GeniusText>menu</GeniusText>
        </span>
      </div>

      <ButtonClose onClick={props.handleClose}>
        <span></span>
        <span></span>
      </ButtonClose>

      <Link className="mt-16 mb-5 block" href={"/"}>
        <img
          style={{ maxWidth: "170px" }}
          className="w-full"
          src={Logo.src}
          alt=""
        />
      </Link>
      <ul className="mb-16">
        {menuPrincipal.map((item, i) => {
          const { name, path } = item;
          return (
            <li key={i}>
              <Link onClick={props.handleClose} className="block" href={path}>
                <LinkItem>/{tCommon(name.toLowerCase())}</LinkItem>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-4 mb-12">
        <GeniusLink href={pathname} locale={'en'} active={locale === 'en'}>En</GeniusLink>
        <GeniusLink href={pathname} locale={'es'} active={locale === 'es'}>Es</GeniusLink>
      </div>
      <div className="font-light text-lg">
        <span className="block ml-3">
          <GeniusText>/menu</GeniusText>
        </span>
        <span>
          <GeniusText>/html</GeniusText>
        </span>
      </div>
    </div>
  );
}
