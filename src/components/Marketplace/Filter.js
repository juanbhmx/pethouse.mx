/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-redundant-roles */

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'

const dataMarket = [
    {
        id: 1,
        photo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_MX?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1654014006527",
        product: "MacBook Air Apple",
        price: "22,989",
        location: "Monterrey, NL"
    },
    {
        id: 2,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1dyz3GZC2SPGAE8UWlAnZhrRYViEyL8hm6WqeZMm4mWdEgp7OBIV57f8p5G2IzzB3ro&usqp=CAU",
        product: "Minino Plus +",
        price: "3,989",
        location: "Michoacan, Juarez"
    }, {
        id: 3,
        photo: "https://definicion.de/wp-content/uploads/2021/08/as.jpg",
        product: "Alimento barato",
        price: "1,989",
        location: "Escobedo, NL"
    },
    {
        id: 4,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4fvwV6BcuujRn-HbinvP2EFvvVfZqzWn3wOlDjmoE21y7iMDjOJBTw5J8uaBOjUd_GLQ&usqp=CAU",
        product: "MacBook 2022",
        price: "22,989",
        location: "Juarez, NL"
    },
    {
        id: 5,
        photo: "https://t1.ev.ltmcdn.com/es/posts/6/7/4/animales_de_la_ciudad_3476_orig.jpg",
        product: "MacBook 2022",
        price: "22,989",
        location: "Careyta, NL"
    }, {
        id: 6,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysWhFUTIqUwIeDcW3IQVZvMYtEaqWG_X16jvd-4qKuC8d_wM1TRX_IvNgsRODuX2sQNY&usqp=CAU",
        product: "MacBook 2022",
        price: "22,989",
        location: "San pedo Garza, NL"
    },
    {
        id: 7,
        photo: "https://www.consumer.es/app/uploads/2021/12/mascotas-conejillo-indias.jpg",
        product: "MacBook 2022",
        price: "22,989",
        location: "San nicolas, NL"
    },
    {
        id: 8,
        photo: "https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg",
        product: "MacBook 2022",
        price: "22,989",
        location: "Garcia, NL"
    }, {
        id: 9,
        photo: "https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg",
        product: "MacBook 2022",
        price: "22,989",
        location: "Monterrey, NL"
    },
    {
        id: 10,
        photo: "https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg",
        product: "MacBook 2022",
        price: "22,989",
        location: "San pedro, NL"
    },

    {
        id: 11,
        photo: "https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg", product: "MacBook 2022",
        price: "22,989",
        location: "Santiago, NL"
    }, {
        id: 12,
        photo: "https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg",
        product: "MacBook 2022",
        price: "22,989",
        location: "Monterrey, NL"
    },
];
const sortOptions = [
    { name: 'Más Popular', href: '#', current: true },
    { name: 'Mejor calificado', href: '#', current: false },
    { name: 'Nuevo', href: '#', current: false },
    { name: 'Precio: Más alto', href: '#', current: false },
    { name: 'Precio: Más bajo', href: '#', current: false },
]
const subCategories = [
    { name: 'Transportadoras', href: '#' },
    { name: 'Alimento', href: '#' },
    { name: 'Juguetes', href: '#' },
    { name: 'Rascadores', href: '#' },
    { name: 'Accesorios', href: '#' },
    { name: 'Ropa', href: '#' },
]
const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Categoria',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Tamaño',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]

const Productos = (
    <>
        {dataMarket.map(({ product, price, location, photo, id }) => (

            <div key={id} className="container mx-auto max-w-sm w-full p-4 sm:1/1 lg:w-1/3">
                <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-1xl">
                    <div className="prod-title">
                        <p className="text-2xl uppercase text-gray-900 font-bold">{product}</p>
                        <p className="uppercase text-sm text-gray-400">
                            {location}
                        </p>
                    </div>
                    <div className="prod-img">
                        <img src={photo} className="w-full object-cover object-center" />
                    </div>
                    <div className="prod-info grid gap-10">
                        <div>
                            <p className="flex flex-row justify-center text-sm text-gray-500 items-center">
                                Stock: 23
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                            <p className="font-bold text-xl">${price}</p>
                            <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">STOCK: 121</button>
                        </div>
                    </div>
                </div>
            </div>

        ))}
    </>

)

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Marketplace() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <div className="mb-6 dark:bg-slate-800 lg:rounded-lg md:rounded-lg xl:rounded-lg lg:my-5 md:my-5 xl:my-5 lg:mx-5 h-full">
            {/* Mobile filter dialog */}
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex z-40">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                                <div className="px-4 flex items-center justify-between">
                                    <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
                                    <button
                                        type="button"
                                        className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                                        onClick={() => setMobileFiltersOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Filters */}
                                <form className="mt-4 border-t border-gray-200">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="font-medium px-2 py-3">
                                        {subCategories.map((category) => (
                                            <li key={category.name}>
                                                <a href={category.href} className="block px-2 py-3">
                                                    {category.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>

                                    {filters.map((section) => (
                                        <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900">{section.name}</span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-6">
                                                            {section.options.map((option, optionIdx) => (
                                                                <div key={option.value} className="flex items-center">
                                                                    <input
                                                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        defaultValue={option.value}
                                                                        type="checkbox"
                                                                        defaultChecked={option.checked}
                                                                        className="h-4 w-4 border-gray-300 rounded text-green-600 focus:ring-green-500"
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                    >
                                                                        {option.label}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <main className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 ">
                <div className="relative z-10 flex items-baseline justify-between pt-2 pb-6 border-b border-slate-600">
                    <h1 className="text-2xl font-bold tracking-tight text-white">Marketplace</h1>

                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-white hover:text-gray-100">
                                    Filtrar
                                    <ChevronDownIcon
                                        className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
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
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-lg shadow-lg">
                                    <div className="py-1 dark:bg-slate-500 rounded-lg">
                                        {sortOptions.map((option) => (
                                            <Menu.Item key={option.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={option.href}
                                                        className={classNames(
                                                            option.current ? 'font-medium text-gray-100' : 'text-white',
                                                            active ? 'bg-slate-600' : '',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        {option.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-white hover:text-gray-100">
                            <span className="sr-only">View grid</span>
                            <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                            onClick={() => setMobileFiltersOpen(true)}
                        >
                            <span className="sr-only">Filtros</span>
                            <FilterIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <section aria-labelledby="products-heading" className="pt-2 pb-10">
                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                        {/* Filters */}
                        <form className="hidden lg:block">
                            <h3 className="sr-only">Categories</h3>
                            <ul role="list" className="text-sm font-medium text-white space-y-4 pb-6 border-b border-slate-600">
                                {subCategories.map((category) => (
                                    <li key={category.name}>
                                        <a href={category.href}>{category.name}</a>
                                    </li>
                                ))}
                            </ul>

                            {filters.map((section) => (
                                <Disclosure as="div" key={section.id} className="border-b border-slate-600 py-6">
                                    {({ open }) => (
                                        <>
                                            <h3 className="-my-3 flow-root">
                                                <Disclosure.Button className="py-3 bg-slate-600 rounded-lg px-4 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-bold text-green-400">{section.name}</span>
                                                    <span className="ml-6 flex items-center">
                                                        {open ? (
                                                            <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                        ) : (
                                                            <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </h3>
                                            <Disclosure.Panel className="pt-6">
                                                <div className="space-y-4">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div key={option.value} className="flex items-center">
                                                            <input
                                                                id={`filter-${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                defaultValue={option.value}
                                                                type="checkbox"
                                                                defaultChecked={option.checked}
                                                                className="h-4 w-4 border-gray-300 rounded text-green-400 focus:ring-indigo-500"
                                                            />
                                                            <label
                                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                className="ml-3 text-sm text-white"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </form>

                        {/* Product grid */}
                        <div className="lg:col-span-3">
                            {/* Replace with your content */}
                            <div className="lg:border-l lg:border-slate-600  lg:h-full" >
                                

                                    <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                                        {dataMarket.map(({ product, price, location, photo, id }) => (
                                            <>
                                                <div className="bg-white rounded-lg">
                                                    <div className='mt-4'>
                                                        Nombre Prod
                                                        <p className='text-gray-400'>
                                                            Monterrey, Nuevo León
                                                        </p>
                                                        <p className='text-gray-400'>
                                                            Stock: 23
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <img src="https://http2.mlstatic.com/D_630493-MLM51163137488_082022-N.jpg" className="w-full object-cover object-center" />
                                                    </div>
                                                    <div className="flex justify-center items-center mt-2 mb-2 ">
                                                        <h2 className='line-through mr-2 text-red-600'>$749</h2> | <h2 className='ml-2 font-bold'>$699</h2>
                                                    </div>
                                                    <div className="ml-5 flex justify-center items-center mt-2.5 mb-5">
                                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                                                    </div>
                                                </div>
                                            </>

                                        ))}

                                        
                                    </div>

                                </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
