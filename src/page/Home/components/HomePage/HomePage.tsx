

import { UsersTable } from '@/modules/UsersTable'
import { Button, TextInput } from '@/UIkit'




export const HomePage = () => {
  return (
    <div>HomePage
      <div>
        <TextInput
          placeholder="Введите текст для фильтрации"
        />
        <Button>Найти</Button>
        <UsersTable />
      </div>
    </div>
  )
}
