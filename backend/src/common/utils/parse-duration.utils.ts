const multipliers = {
  s: 1000, // Секунды
  m: 60 * 1000, // Минуты
  h: 60 * 60 * 1000, // Часы
  d: 24 * 60 * 60 * 1000, // Дни
  w: 7 * 24 * 60 * 60 * 1000, // Недели
  M: 30 * 24 * 60 * 60 * 1000, // Месяцы (~30 дней)
  y: 365 * 24 * 60 * 60 * 1000, // Годы (~365 дней)
};

export const parseTokenDuration = (durationStr: string): Date => {
  if (!durationStr || !/^(\d+[smhdwMy])+$/.test(durationStr)) {
    throw new Error('Неверный формат строки. Примеры: "7d", "2h30m".');
  }

  let totalMs = 0;
  const regex = /(\d+)([smhdwMy])/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(durationStr)) !== null) {
    const value = parseInt(match[1], 10);
    const unit = match[2];
    totalMs += value * multipliers[unit];
  }

  const expirationDate = new Date(Date.now() + totalMs);
  if (isNaN(expirationDate.getTime())) {
    throw new Error('Получена недопустимая дата.');
  }

  return expirationDate;
};
