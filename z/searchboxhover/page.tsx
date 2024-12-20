

'use client'

import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { Search, X, Check } from 'lucide-react'
import Image from 'next/image'


type User = {
  id: string
  name: string
  username: string
  avatar: string
}

const users: User[] = [
  { id: '1', name: 'Phoenix Baker', username: '@phoenix', avatar: '/Avatar.svg' },
  { id: '2', name: 'Olivia Rhye', username: '@olivia', avatar: '/Avatar-1.svg' },
  { id: '3', name: 'Lana Steiner', username: '@lana', avatar: '/Avatar-2.svg' },
  { id: '4', name: 'Demi Wilkinson', username: '@demi', avatar: '/Avatar-3.svg' },
  { id: '5', name: 'Candice Wu', username: '@candice', avatar: '/Avatar-4.svg' },
  { id: '6', name: 'Natali Craig', username: '@natali', avatar: '/Avatar-5.svg' },
  { id: '7', name: 'Drew Cano', username: '@drew', avatar: '/Avatar-6.svg' },
]

export default function TagSearch() {
  const [search, setSearch] = useState('')
  const [selectedUsers, setSelectedUsers] = useState<User[]>([])
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const [isOpen, setIsOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name))

  const filteredAndSortedUsers = sortedUsers.sort((a, b) => {
    const aSelected = selectedUsers.some(u => u.id === a.id)
    const bSelected = selectedUsers.some(u => u.id === b.id)
    if (aSelected && !bSelected) return -1
    if (!aSelected && bSelected) return 1
    const aMatches = a.name.toLowerCase().includes(search.toLowerCase())
    const bMatches = b.name.toLowerCase().includes(search.toLowerCase())
    if (aMatches && !bMatches) return -1
    if (!aMatches && bMatches) return 1
    return 0
  })

  const handleToggleUser = (user: User) => {
    setSelectedUsers((prev) =>
      prev.some((u) => u.id === user.id)
        ? prev.filter((u) => u.id !== user.id)
        : [...prev, user].sort((a, b) => a.name.localeCompare(b.name))
    )
    setSearch('')
    setFocusedIndex(-1)
    searchInputRef.current?.focus()
  }

  const handleRemoveUser = (userId: string) => {
    setSelectedUsers((prev) => prev.filter((u) => u.id !== userId))
  }

  const isSelected = (userId: string) => selectedUsers.some((u) => u.id === userId)

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusedIndex((prev) => (prev < filteredAndSortedUsers.length - 1 ? prev + 1 : prev))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const matchingUsers = filteredAndSortedUsers.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()) && !isSelected(user.id)
      )
      if (matchingUsers.length > 0) {
        setSelectedUsers(prev => 
          [...prev, ...matchingUsers].sort((a, b) => a.name.localeCompare(b.name))
        )
        setSearch('')
        setFocusedIndex(-1)
      } else if (focusedIndex >= 0) {
        handleToggleUser(filteredAndSortedUsers[focusedIndex])
      }
    }
  }

  useEffect(() => {
    if (focusedIndex >= 0 && listRef.current) {
      const focusedElement = listRef.current.children[focusedIndex] as HTMLLIElement
      focusedElement.scrollIntoView({ block: 'nearest' })
    }
  }, [focusedIndex])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="flex items-start p-16 justify-center h-screen font-sfpro">
      <div 
        ref={containerRef} 
        className="w-[690px] relative rounded-[15px]"
      >
        <div 
          className="flex flex-wrap items-center gap-2 p-2 border-[1.86px] bg-white shadow-sm rounded-md cursor-text"
          onClick={() => {
            searchInputRef.current?.focus()
            setIsOpen(true)
          }}
          onMouseEnter={() => setIsOpen(true)}
        >
          <Search className="w-5 h-5 text-gray-400" />
          {selectedUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-[5.5px] space-x-1 border-[1.8px] border-[#D0D5DD] rounded-[11.16px] px-2 py-1 text-[#344054] text-[17px]"
            >
              <Image src={user.avatar} alt="" width={29.76} height={29.76} className="rounded-full" />
              <span>{user.name.split(' ')[0]}</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemoveUser(user.id)
                }}
                className="ml-1 text-gray-500  hover:text-gray-700"
              >
                <X className="w-4 h-4" />
                <span className="sr-only">Remove {user.name}</span>
              </button>
            </div>
          ))}
          <input
            ref={searchInputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            className="flex-1 outline-none "
            placeholder="Search"
            aria-label="Search users"
          />
        </div>

       
        <div 
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className={`absolute w-full mt-1 bg-white rounded-[28px] shadow-lg transform transition-all duration-200 ease-in-out z-10 ${
            isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
          <style jsx global>{`
  .custom-scrollbar::-webkit-scrollbar {
    width: 14.88px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
    margin: 4px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #E4E7EC;
    border-radius: 20px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #D0D5DD;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`}</style>
            <ul ref={listRef} className="p-2 space-y-2">
              {filteredAndSortedUsers.map((user, index) => (
                <li
                  key={user.id}
                  onClick={() => handleToggleUser(user)}
                  className={`flex items-center justify-between p-2 cursor-pointer rounded-md ${
                    index === focusedIndex ? 'bg-gray-100' : ''
                  } ${
                    search && user.name.toLowerCase().includes(search.toLowerCase()) && !isSelected(user.id) ? 'bg-yellow-50' : ''
                  } ${
                    isSelected(user.id) ? 'bg-green-50' : ''
                  } hover:bg-gray-100`}
                >
                  <div className="flex items-center space-x-3">
                    <Image src={user.avatar} alt="" width={44.64} height={44.64} className="rounded-full" />
                    <div className='flex items-center gap-[10px]   justify-center'>
                      <div className="font-[400] text-[#101828] text-[20px]">{user.name}</div>
                      <div className="text-[20px] pt-[2px] text-gray-500">{user.username}</div>
                    </div>
                  </div>
                  {isSelected(user.id) && (
                    <Check className="w-5 h-5 text-green-500" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}