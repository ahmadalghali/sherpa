import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

type Props = {
  options: {
    title: string,
    icon: JSX.Element
    action: Function
  }[]
}

export default function VerticalOptionsIcon({ options }: Props) {

  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md  text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <EllipsisVerticalIcon className='h-6 w-6' />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-50 absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="z-50 px-1 py-1">
              {options.map(({ title, icon, action }, i) => (
                <Menu.Item key={i}>
                  {({ active }) => (
                    <button
                      onClick={() => action()}
                      className={`${active ? 'bg-gray-200 text-gray-900' : ''
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <span className='mr-2'>
                        {icon}
                      </span>
                      {title}
                    </button>
                  )}
                </Menu.Item>
              ))}
              {/* <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-gray-200 text-gray-900' : ''
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <span className='mr-2'>
                      <EditActiveIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                    Edit
                  </button>
                )}
              </Menu.Item> */}

              {/* <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => (goal.id)}
                    className={`${active ? 'bg-gray-200 text-gray-900' : ''
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <span className='mr-2'>
                      <DeleteActiveIcon
                        className="h-5 w-5 text-primary-400"
                        aria-hidden="true"
                      />
                    </span>

                    Delete
                  </button>
                )}
              </Menu.Item> */}
            </div>

          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}


