export const getWeek = (date = new Date()) => {
  const dayIndex = date.getDay();

  const diffToLastMonday = (dayIndex !== 0) ? dayIndex - 1 : 6;
  const dateOfMonday = new Date(date.setDate(date.getDate() - diffToLastMonday));

  return [
    dateOfMonday, 
    new Date(date.setDate(dateOfMonday.getDate() + 1)),
    new Date(date.setDate(dateOfMonday.getDate() + 2)),
    new Date(date.setDate(dateOfMonday.getDate() + 3)),
    new Date(date.setDate(dateOfMonday.getDate() + 4)),
    new Date(date.setDate(dateOfMonday.getDate() + 5)),
    new Date(date.setDate(dateOfMonday.getDate() + 6)),
  ];
}

export const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};