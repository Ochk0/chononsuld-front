import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Team", href: "/visualize/team", icon: UsersIcon, current: false },
  {
    name: "Projects",
    href: "/visualize/projects",
    icon: FolderIcon,
    count: "12",
    current: false,
  },
  {
    name: "Calendar",
    href: "/visualize/calendar",
    icon: CalendarIcon,
    count: "20+",
    current: false,
  },
  {
    name: "Documents",
    href: "/visualize/documents",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: "Reports",
    href: "/visualize/reports",
    icon: ChartPieIcon,
    current: false,
  },
];
const asd = [
  {
    id: 1,
    name: "Conferences",
    path: "/conferences",
    mname: "Бага хурал",
    initial: "C",
  },
  {
    id: 2,
    name: "CourseSchedules",
    path: "/courseschedules",
    mname: "Хичээлийн хуваарь",
    initial: "C",
  },
  {
    id: 3,
    name: "Curriculums",
    path: "/curriculums",
    mname: "Бага хурал",
    initial: "C",
  },
  {
    id: 4,
    name: "Enrollments",
    path: "/enrollments",
    mname: "Сургалтын хөтөлбөрүүд",
    initial: "E",
  },
  {
    id: 5,
    name: "Grades",
    path: "/grades",
    mname: "Дүнгүүд",
    initial: "G",
  },
  {
    id: 6,
    name: "Programs",
    path: "/programs",
    mname: "Програмууд",
    initial: "P",
  },
  {
    id: 7,
    name: "ProjectKeywords",
    path: "/projectkeywords",
    mname: "Төслийн түлхүүр үг",
    initial: "P",
  },
  {
    id: 8,
    name: "ProjectMembers",
    path: "/projectmembers",
    mname: "Төслийн гишүүд",
    initial: "P",
  },
  {
    id: 9,
    name: "ProjectOverviews",
    path: "/projectoverviews",
    mname: "Төслийн тойм",
    initial: "P",
  },
  {
    id: 10,
    name: "Rooms",
    path: "/rooms",
    mname: "Өрөөнүүд",
    initial: "R",
  },
  {
    id: 11,
    name: "Staffs",
    path: "/staffs",
    mname: "Ажилчид",
    initial: "S",
  },
  {
    id: 12,
    name: "User",
    path: "/user",
    mname: "Хэрэглэгчид",
    initial: "U",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SidebarLeft({ table }: { table: string | string[] }) {
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
              {navigation.map((item) => (
                <li key={item.name}>
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
                    {item.count ? (
                      <span
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
                        aria-hidden="true"
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <ul role="list" className="-mx-2 mt-2 space-y-1"></ul>
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
