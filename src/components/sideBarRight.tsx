"use client";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { PlaceholdersAndVanishInput } from "./ui/vanish-input";
import { ChangeEvent, FormEvent } from "react";
import DropDownBox from "./basic/dropdown";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SidebarRight() {
  return (
    <div className="flex grow flex-col gap-y-5 h-full overflow-y-auto bg-[#154185] px-6">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt="Your Company"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              <PlaceholdersAndVanishInput
                placeholders={[]}
                onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                  throw new Error("Function not implemented.");
                }}
                onSubmit={function (e: FormEvent<HTMLFormElement>): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </ul>
            <ul>
              <DropDownBox />
            </ul>
          </li>

          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
            >
              <img
                className="h-8 w-8 rounded-full bg-indigo-700"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
