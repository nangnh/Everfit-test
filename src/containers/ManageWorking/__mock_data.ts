import { DayWorkITF } from "./interfaces";

export const data : DayWorkITF[] = [
  {
    id: 'work-1',
    dateTime: 'Sat Feb 11 2023 12:08:58 GMT+0700 (Indochina Time)',
    workouts: [{
      id: 'work-out-1',
      name: 'CHEST DAY - WITH ARM',
      exercises: [
        {
          id: 'exercises-1',
          name: 'Bench Press Model',
          information: '50 Ib x 10',
          num_sets: 3
        },
        {
          id: 'exercises-2',
          name: 'Exercises C',
          information: '50 Ib x 10',
          num_sets: 3
        },
      ]
    }]
  },
  {
    id: 'work-2',
    dateTime: 'Sat Feb 11 2023 12:08:58 GMT+0700 (Indochina Time)',
    workouts: [
      {
        id: 'work-out-2-1',
        name: 'LEG DAY',
        exercises: [
          {
            id: 'exercises-1',
            name: 'Bench Press Model',
            information: '50 Ib x 10',
            num_sets: 3
          },
          {
            id: 'exercises-3',
            name: 'Exercises B',
            information: '50 Ib x 10',
            num_sets: 3
          },
          {
            id: 'exercises-4',
            name: 'Exercises A',
            information: '50 Ib x 10',
            num_sets: 3
          }
        ]
      }
    ]
  },
  {

    id: 'work-3',
    dateTime: 'Sun Feb 12 2023 12:08:58 GMT+0700 (Indochina Time)',
    workouts: [
      {
        id: 'work-out-3-1',
        name: 'LEG DAY',
        exercises: [
          {
            id: 'exercises-6',
            name: 'Bench Press Model',
            information: '50 Ib x 10',
            num_sets: 3
          },
          {
            id: 'exercises-7',
            name: 'Exercises B',
            information: '50 Ib x 10',
            num_sets: 3
          },
          {
            id: 'exercises-8',
            name: 'Exercises A',
            information: '50 Ib x 10',
            num_sets: 3
          }
        ]
      }
    ]
  }
]