#### 时间戳转换

```JavaScript
const nowTime = dayjs().format();
const formatTime = dayjs().format('YYYY-MM-DD HH:mm:ss'); 
console.log('获取当前时间', nowTime);

const nowSecondTimestamp = dayjs(nowTime).unix();
console.log('当前时间转换为秒级时间戳', nowSecondTimestamp);

const nowMillisecondTimestamp = dayjs(nowTime).valueOf();
console.log('当前时间转换为毫秒级时间戳', nowMillisecondTimestamp);

const nowTimeFormat = dayjs(nowTime).format(defaultFormat);
console.log('使用指定格式转换时间', nowTimeFormat);
```

#### 年份操作

```JavaScript
const thisYear = dayjs(nowTime).format('YYYY');
console.log('获取当前年份', thisYear);

const preYear = dayjs(nowTime).subtract(1, 'year').format('YYYY');
console.log('获取现在时间的上一个年份', preYear);

const targetPreYear = dayjs(preYear).subtract(1, 'year').format('YYYY');
console.log('获取指定年份的上一年', targetPreYear);
```

#### 月份操作

```JavaScript
const thisMonth = dayjs(nowTime).format('MM');
console.log('获取当前月份', thisMonth);

const preMonth = dayjs(nowTime).subtract(1, 'month').format('MM');
console.log('获取上个月份', preMonth);

const thisMonthDays = dayjs(nowTime).daysInMonth();
console.log('获取当天月份天数', thisMonthDays);

const preMonthDays = dayjs(nowTime).subtract(1, 'month').daysInMonth();
console.log('获取上个月份天数', preMonthDays);

const targetMonthDays = dayjs(preMonth).daysInMonth();
console.log('获取指定月份天数', targetMonthDays);

const thisMonthFirstDays = dayjs(nowTime).startOf('month').format('YYYY-MM-DD HH:mm:ss');
console.log('当月第一天', thisMonthFirstDays);

const thisMonthEndDays = dayjs(nowTime).endOf('month').format('YYYY-MM-DD HH:mm:ss');
console.log('当月最后一天', thisMonthEndDays);

const thisMonthFirstDaysBeforce7Days = dayjs(thisMonthFirstDays).subtract(7, 'day').format('YYYY-MM-DD HH:mm:ss');
console.log('当月第一天前七天', thisMonthFirstDaysBeforce7Days);

const thisMonthEndDaysBeforce7Days = dayjs(thisMonthEndDays).subtract(7, 'day').format('YYYY-MM-DD HH:mm:ss');
console.log('当月月底前七天', thisMonthEndDaysBeforce7Days);

const thisMonthFirstDaysAfter7Days = dayjs(thisMonthFirstDays).subtract(-7, 'day').format('YYYY-MM-DD HH:mm:ss');
console.log('当月第一天后七天', thisMonthFirstDaysAfter7Days);

const thisMonthEndDaysAfter7Days = dayjs(thisMonthEndDays).subtract(-7, 'day').format('YYYY-MM-DD HH:mm:ss');
console.log('当月月底后七天', thisMonthEndDaysAfter7Days);

const preMonthSecondDay = dayjs(nowTime).subtract(1, 'month').startOf('month').subtract(-2, 'week').format('YYYY-MM-DD HH:mm:ss');
console.log('上个月第二周周一', preMonthSecondDay);

const thisMonthSecondDay = dayjs(nowTime).startOf('month').subtract(-2, 'week').format('YYYY-MM-DD HH:mm:ss');
console.log('当月第二周周一', thisMonthSecondDay);

const nextMonthSecondDay = dayjs(nowTime).subtract(-1, 'month').startOf('month').subtract(-2, 'week').format('YYYY-MM-DD HH:mm:ss');
console.log('下个月第二周周一', nextMonthSecondDay);

const targetMonthStartTime = dayjs('2021-02').startOf('month').format('YYYY-MM-DD HH:mm:ss');
const targetMonthEndTime = dayjs('2021-02').endOf('month').format('YYYY-MM-DD HH:mm:ss');
console.log('指定月份的开始和结束时间', targetMonthStartTime, targetMonthEndTime);

const monthDiff = dayjs(nowTime).diff('2021-01', 'month', true);
console.log('比较两个时间相差月份', monthDiff);

const nextMonthFirstDay = dayjs(nowTime).add(1, 'month').startOf('month').format('YYYY-MM-DD HH:mm:ss');
console.log('获取下个月第一天', nextMonthFirstDay);

const nextMonthLastDay = dayjs(nowTime).add(1, 'month').endOf('month').format('YYYY-MM-DD HH:mm:ss');
console.log('获取下个月最后一天', nextMonthLastDay);
```

#### 星期操作

```JavaScript
const thisDateWeek = dayjs(nowTime).day();
console.log('获取当前时间是周几 星期', thisDateWeek);

const thisMonthFirstWeekStartTime = dayjs(nowTime).startOf('week').add(1, 'day').format('YYYY-MM-DD HH:mm:ss');
const thisMonthFirstWeekEndTime = dayjs(nowTime).endOf('week').add(1, 'day').format('YYYY-MM-DD HH:mm:ss');
console.log('本周开始和结束时间', thisMonthFirstWeekStartTime, thisMonthFirstWeekEndTime);

const thisMonthFirstMonthStartTime = dayjs(nowTime).startOf('month').format('YYYY-MM-DD HH:mm:ss');
const thisMonthFirstMonthEndTime = dayjs(nowTime).endOf('month').format('YYYY-MM-DD HH:mm:ss');
console.log('本月开始和结束时间', thisMonthFirstMonthStartTime, thisMonthFirstMonthEndTime);

// 比较两个时间相差星期
const weekDiff = dayjs(nowTime).diff('2021-01', 'week', true);
console.log('比较相差的星期', weekDiff);

const preeWeek = dayjs(nowTime).subtract(1, 'week').format('YYYY-MM-DD HH:mm:ss');
console.log('一周前的时间', preeWeek);

// 在这里需要加2天 是因为 dayjs的星期天是从0开始
const preeTuesday = dayjs(nowTime).subtract(1, 'week').startOf('week').add(2, 'day').format('YYYY-MM-DD HH:mm:ss');
console.log('上周二', preeTuesday);

const thisTuesday = dayjs(nowTime).startOf('week').add(2, 'day').format('YYYY-MM-DD HH:mm:ss');
console.log('本周二', thisTuesday);

const nextTuesday = dayjs(nowTime).startOf('week').add(1, 'week').add(2, 'day').format('YYYY-MM-DD HH:mm:ss');
console.log('下周二', nextTuesday);
```

#### 指定天操作

```JavaScript
// 比较两个时间相差的天数
const dayDiff = dayjs(nowTime).diff('2021-01', 'day', true);
console.log('比较相差的天数', dayDiff);

const beforeTenDays = dayjs(nowTime).subtract(7, 'day').format('YYYY-MM-DD HH:mm:ss');
console.log('查看七天前的日期', beforeTenDays);

// 时分秒操作

const isBeforeDate = dayjs('2021-02-01').isBefore('2021-01-01');
console.log('是否在指定时间之前', isBeforeDate);

const isAfter = dayjs('2021-02-01').isAfter('2021-01-01');
console.log('是否在指定时间之后', isAfter);

const isSame = dayjs('2021-02-01').isSame('2021-02-01');
console.log('是否相同时间', isSame);

// 时间校验

console.log('校验是否争取的时间格式', dayjs('202112312asdxzsc').isValid());
```

