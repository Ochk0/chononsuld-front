import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon, ServerStackIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";


const asd = [
  {
    id: 1,
    name: "Conferences",
    href: "/conferences",
    mname: "Бага хурал",
    initial: "C",
    icon: ServerStackIcon,
    current: false,
  },
  {
    id: 2,
    name: "CourseSchedules",
    href: "/courseschedules",
    mname: "Хичээлийн хуваарь",
    initial: "C",
    icon: ServerStackIcon,
    current: false,
  },
  {
    id: 3,
    name: "Curriculums",
    href: "/curriculums",
    mname: "Бага хурал",
    initial: "C",
    icon: ServerStackIcon,
    current: false,
  },
  {
    id: 4,
    name: "Enrollments",
    href: "/enrollments",
    mname: "Сургалтын хөтөлбөрүүд",
    initial: "E",
    icon: ServerStackIcon,
    current: false,
  },
  {
    id: 5,
    name: "Grades",
    href: "/grades",
    mname: "Дүнгүүд",
    initial: "G",
    icon: ServerStackIcon,
    current: false,
  },
  {
    id: 6,
    name: "Programs",
    href: "/programs",
    mname: "Програмууд",
    initial: "P",
    icon: ServerStackIcon,
    current: false,
  },
  {
    id: 7,
    name: "ProjectKeywords",
    href: "/projectkeywords",
    mname: "Төслийн түлхүүр үг",
    initial: "P",
    icon: ServerStackIcon,
    current: false,
  },
  {
    id: 8,
    name: "ProjectMembers",
    href: "/projectmembers",
    mname: "Төслийн гишүүд",
    initial: "P",
    icon: ServerStackIcon,
    current: false,
  },
  {
    id: 9,
    name: "ProjectOverviews",
    href: "/projectoverviews",
    mname: "Төслийн тойм",
    initial: "P",
    icon: ServerStackIcon,
    current: false,
  },
  {
    id: 10,
    name: "Rooms",
    href: "/rooms",
    mname: "Өрөөнүүд",
    initial: "R",
    icon: ServerStackIcon,
    current: false,
  },
  {
    id: 11,
    name: "Staffs",
    href: "/staffs",
    mname: "Ажилчид",
    initial: "S",
    icon: ServerStackIcon,
    current: false,
  },
  {
    id: 12,
    name: "User",
    href: "/user",
    mname: "Хэрэглэгчид",
    initial: "U",
    icon: ServerStackIcon,
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SidebarLeft({ table }: { table: string | string[] }) {
  return (
    <div className="flex grow flex-col gap-y-5 h-full overflow-y-auto bg-[#154185] px-6">
      <div className="flex h-16 shrink-0 items-center">
        <Link href='/'>
          <img
              className="h-8 w-auto cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/311/311591.png"
              alt="Wolf Totem"
          />
        </Link>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
          <ul role="list" className="-mx-2 space-y-1">
              {asd.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.name.toLowerCase() === table
                        ? "bg-indigo-700 text-white"
                        : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-white"
                          : "text-indigo-200 group-hover:text-white",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>


        </ul>
      </nav>
    </div>
  );
}
