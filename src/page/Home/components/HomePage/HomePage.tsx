
import { Button, Table, TextInput } from '@/UIkit'


interface User {
  _id: number,
  firstName: string
  lastName: string
  email: string
  phone: string
}

const data: User[] = [
  {
    "_id": 296,
    "firstName": "Selma Terry",
    "lastName": "Lenore Chase",
    "email": "lenorechase@futurize.com",
    "phone": "+1 (819) 406-3304"
  },
  {
    "_id": 379,
    "firstName": "Rhonda Steele",
    "lastName": "Edwina Patrick",
    "email": "edwinapatrick@futurize.com",
    "phone": "+1 (890) 499-2710"
  },
  {
    "_id": 163,
    "firstName": "Gordon Robinson",
    "lastName": "Jeanie Cross",
    "email": "jeaniecross@futurize.com",
    "phone": "+1 (914) 414-3868"
  },
  {
    "_id": 877,
    "firstName": "Mai Lambert",
    "lastName": "Chavez Mack",
    "email": "chavezmack@futurize.com",
    "phone": "+1 (991) 402-2044"
  },
  {
    "_id": 705,
    "firstName": "Deana Avery",
    "lastName": "Charlotte Nash",
    "email": "charlottenash@futurize.com",
    "phone": "+1 (815) 472-2886"
  },
  {
    "_id": 506,
    "firstName": "Daisy Matthews",
    "lastName": "Sweeney Farley",
    "email": "sweeneyfarley@futurize.com",
    "phone": "+1 (897) 484-2876"
  },
  {
    "_id": 360,
    "firstName": "Janie Blair",
    "lastName": "Ferguson Burton",
    "email": "fergusonburton@futurize.com",
    "phone": "+1 (904) 432-3612"
  },
  {
    "_id": 963,
    "firstName": "Hobbs Drake",
    "lastName": "Durham Lloyd",
    "email": "durhamlloyd@futurize.com",
    "phone": "+1 (839) 491-3470"
  },
  {
    "_id": 701,
    "firstName": "Holt Noel",
    "lastName": "Parsons Talley",
    "email": "parsonstalley@futurize.com",
    "phone": "+1 (946) 459-3051"
  },
  {
    "_id": 814,
    "firstName": "Shanna Wise",
    "lastName": "Ruiz Meyers",
    "email": "ruizmeyers@futurize.com",
    "phone": "+1 (889) 538-2955"
  },
  {
    "_id": 636,
    "firstName": "Webster Kirkland",
    "lastName": "Joni Christensen",
    "email": "jonichristensen@futurize.com",
    "phone": "+1 (926) 485-3412"
  },
  {
    "_id": 266,
    "firstName": "Williams Mcfarland",
    "lastName": "Hull Pratt",
    "email": "hullpratt@futurize.com",
    "phone": "+1 (886) 593-2445"
  },
  {
    "_id": 380,
    "firstName": "Hendricks Graves",
    "lastName": "Rosa Barton",
    "email": "rosabarton@futurize.com",
    "phone": "+1 (995) 471-3450"
  },
  {
    "_id": 936,
    "firstName": "Chambers Olsen",
    "lastName": "Fay Ayers",
    "email": "fayayers@futurize.com",
    "phone": "+1 (838) 584-3106"
  },
  {
    "_id": 886,
    "firstName": "Charmaine Pollard",
    "lastName": "Allie Small",
    "email": "alliesmall@futurize.com",
    "phone": "+1 (958) 530-2014"
  },
  {
    "_id": 837,
    "firstName": "Stokes Browning",
    "lastName": "Lorrie Craig",
    "email": "lorriecraig@futurize.com",
    "phone": "+1 (800) 505-2824"
  },
  {
    "_id": 59,
    "firstName": "Dena Sharp",
    "lastName": "Roberts Wilkins",
    "email": "robertswilkins@futurize.com",
    "phone": "+1 (939) 545-3615"
  },
  {
    "_id": 168,
    "firstName": "Heath Anthony",
    "lastName": "Millicent Roman",
    "email": "millicentroman@futurize.com",
    "phone": "+1 (904) 533-2600"
  },
  {
    "_id": 598,
    "firstName": "Craft Romero",
    "lastName": "Weber Blackburn",
    "email": "weberblackburn@futurize.com",
    "phone": "+1 (947) 447-2143"
  },
  {
    "_id": 293,
    "firstName": "Bettie England",
    "lastName": "Bennett Patterson",
    "email": "bennettpatterson@futurize.com",
    "phone": "+1 (833) 528-3865"
  },
  {
    "_id": 325,
    "firstName": "Herminia Campbell",
    "lastName": "Eloise Blackwell",
    "email": "eloiseblackwell@futurize.com",
    "phone": "+1 (849) 448-2585"
  },
  {
    "_id": 511,
    "firstName": "Lindsey Mcclain",
    "lastName": "Eddie Sutton",
    "email": "eddiesutton@futurize.com",
    "phone": "+1 (950) 481-3335"
  },
  {
    "_id": 989,
    "firstName": "Jan Larson",
    "lastName": "Angelita Love",
    "email": "angelitalove@futurize.com",
    "phone": "+1 (992) 432-2791"
  },
  {
    "_id": 182,
    "firstName": "Tyler Sexton",
    "lastName": "Mara Pierce",
    "email": "marapierce@futurize.com",
    "phone": "+1 (989) 525-2277"
  },
  {
    "_id": 13,
    "firstName": "Elise Dixon",
    "lastName": "William Marks",
    "email": "williammarks@futurize.com",
    "phone": "+1 (854) 453-3266"
  },
  {
    "_id": 289,
    "firstName": "Blanche Woodard",
    "lastName": "Hines Bentley",
    "email": "hinesbentley@futurize.com",
    "phone": "+1 (911) 478-3171"
  },
  {
    "_id": 38,
    "firstName": "Francis Richards",
    "lastName": "Bryant Lopez",
    "email": "bryantlopez@futurize.com",
    "phone": "+1 (984) 407-3619"
  },
  {
    "_id": 444,
    "firstName": "Olivia Scott",
    "lastName": "Bethany Leon",
    "email": "bethanyleon@futurize.com",
    "phone": "+1 (864) 568-3231"
  }]




const titles: Record<keyof User, string> = {
  "_id": 'ID',
  "firstName": "Имя",
  "lastName": "Фамилия",
  "email": "Email",
  "phone": "Телефон"
}

export const HomePage = () => {
  return (
    <div>HomePage
      <div>
        <TextInput
          placeholder="Введите текст для фильтрации"
        />
        <Button>Найти</Button>
        <Table data={data} titles={titles} />
      </div>
    </div>
  )
}
