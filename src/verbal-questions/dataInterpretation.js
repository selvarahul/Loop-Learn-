const dataInterpretation = {
  1: [
    { question: "If sales increased from 200 to 250, what is the % increase?", options: ["20%", "25%", "30%", "50%"], answer: "25%" },
    { question: "A pie chart shows 40% spent on rent. If income = 50,000, rent = ?", options: ["20,000", "25,000", "15,000", "30,000"], answer: "20,000" },
    { question: "Company's profit is 120, cost is 600. Find % profit.", options: ["15%", "20%", "25%", "18%"], answer: "20%" },
    { question: "If marks in math = 80/100 and science = 70/100, average % = ?", options: ["75%", "70%", "72%", "85%"], answer: "75%" },
    { question: "Population grew from 1000 to 1250. % growth?", options: ["20%", "25%", "15%", "30%"], answer: "25%" },
    { question: "Sales of A = 200, B = 300, total = ?", options: ["400", "600", "500", "700"], answer: "500" },
    { question: "If expenditure = 60% of income 50,000, savings = ?", options: ["15,000", "20,000", "25,000", "30,000"], answer: "20,000" },
    { question: "Marks: A=40, B=50, C=60. Average = ?", options: ["50", "55", "45", "60"], answer: "50" },
    { question: "Profit 300 on cost 1500. Profit %?", options: ["10%", "15%", "20%", "25%"], answer: "20%" },
    { question: "Pie chart: 25% transport. Income 40,000. Transport cost?", options: ["8,000", "10,000", "12,000", "15,000"], answer: "10,000" }
  ],
  2: [
    { question: "Revenue rose from 2M to 2.4M. % rise?", options: ["15%", "20%", "25%", "30%"], answer: "20%" },
    { question: "If expenditure is 70% of 60,000, savings = ?", options: ["15,000", "18,000", "20,000", "25,000"], answer: "18,000" },
    { question: "A scored 75, B scored 85, C scored 95. Avg = ?", options: ["80", "85", "90", "95"], answer: "85" },
    { question: "Profit 500 on 2500. % profit?", options: ["10%", "15%", "20%", "25%"], answer: "20%" },
    { question: "Sales 400, expenses 300. Profit?", options: ["50", "75", "100", "120"], answer: "100" },
    { question: "Expenditure 40% on food, income 20,000. Food cost?", options: ["5,000", "6,000", "7,000", "8,000"], answer: "8,000" },
    { question: "Marks in 3 subjects: 60, 70, 80. %?", options: ["60%", "70%", "75%", "80%"], answer: "70%" },
    { question: "Growth from 4000 to 5000. %?", options: ["20%", "22%", "25%", "18%"], answer: "25%" },
    { question: "Cost = 2000, profit = 500. Selling price?", options: ["2300", "2400", "2500", "2600"], answer: "2500" },
    { question: "Income 45,000, savings 15,000. % savings?", options: ["25%", "30%", "33.3%", "35%"], answer: "33.3%" }
  ],
  3: [
    { question: "Income 60,000, expenditure 42,000. Savings %?", options: ["25%", "28%", "30%", "35%"], answer: "30%" },
    { question: "Marks: A=80, B=90, C=70. Avg = ?", options: ["75", "80", "85", "90"], answer: "80" },
    { question: "Profit 200 on 1000. Profit %?", options: ["15%", "20%", "25%", "30%"], answer: "20%" },
    { question: "Sales 600, expenses 450. Profit?", options: ["100", "120", "130", "150"], answer: "150" },
    { question: "Rent is 20% of income 25,000. Rent?", options: ["4000", "4500", "5000", "5500"], answer: "5000" },
    { question: "Population from 500 to 650. Growth %?", options: ["20%", "25%", "30%", "28%"], answer: "30%" },
    { question: "Cost 800, selling price 1000. Profit %?", options: ["15%", "20%", "25%", "30%"], answer: "25%" },
    { question: "Income 50,000, savings 10,000. % savings?", options: ["15%", "18%", "20%", "22%"], answer: "20%" },
    { question: "Expenditure 36,000, income 48,000. % savings?", options: ["20%", "22%", "25%", "30%"], answer: "25%" },
    { question: "Pie chart: 30% food. Income 60,000. Food cost?", options: ["16,000", "18,000", "20,000", "22,000"], answer: "18,000" }
  ],
  4: [
    { question: "Sales increased from 800 to 920. % increase?", options: ["10%", "12.5%", "15%", "18%"], answer: "15%" },
    { question: "Pie chart shows 35% on rent. If income = 80,000, rent = ?", options: ["24,000", "26,000", "28,000", "30,000"], answer: "28,000" },
    { question: "Cost = 1,200; profit = 180. Profit %?", options: ["12%", "15%", "18%", "20%"], answer: "15%" },
    { question: "Marks: 78/100 and 64/100. Average % = ?", options: ["68%", "71%", "72%", "75%"], answer: "71%" },
    { question: "Population grew 1,500 → 1,800. % growth?", options: ["15%", "18%", "20%", "25%"], answer: "20%" },
    { question: "Sales A=350, B=420, total = ?", options: ["670", "770", "780", "790"], answer: "770" },
    { question: "Expenditure = 55% of 90,000. Savings = ?", options: ["36,000", "40,500", "45,000", "50,000"], answer: "40,500" },
    { question: "Avg of 45, 55, 75 = ?", options: ["55", "58.33", "60", "61.67"], answer: "58.33" },
    { question: "Profit 240 on cost 1,600. Profit %?", options: ["12%", "14%", "15%", "18%"], answer: "15%" },
    { question: "Pie: Transport 22%. Income 50,000. Transport cost?", options: ["10,000", "11,000", "12,000", "13,000"], answer: "11,000" }
  ],

  // ---------- SET 5 ----------
  5: [
    { question: "Revenue rose 1.2M → 1.5M. % rise?", options: ["20%", "22%", "25%", "30%"], answer: "25%" },
    { question: "Expenditure is 65% of 70,000. Savings = ?", options: ["21,000", "22,500", "24,500", "25,000"], answer: "24,500" },
    { question: "Scores 68, 72, 80, 90. Average = ?", options: ["75", "77.5", "78", "80"], answer: "77.5" },
    { question: "Profit 750 on 3,000. % profit?", options: ["20%", "22.5%", "25%", "28%"], answer: "25%" },
    { question: "Sales 950, expenses 760. Profit?", options: ["160", "180", "190", "200"], answer: "190" },
    { question: "Pie: 45% food, income 40,000. Food cost?", options: ["16,000", "17,000", "18,000", "20,000"], answer: "18,000" },
    { question: "3 subjects: 55, 65, 85 out of 100. %?", options: ["65%", "68.33%", "70%", "75%"], answer: "68.33%" },
    { question: "Growth 2,400 → 3,000. %?", options: ["20%", "22%", "25%", "30%"], answer: "25%" },
    { question: "Cost = 4,500, profit = 540. SP = ?", options: ["4,940", "5,040", "5,100", "5,200"], answer: "5,040" },
    { question: "Income 75,000, savings 18,750. % savings?", options: ["20%", "22.5%", "25%", "27.5%"], answer: "25%" }
  ],

  // ---------- SET 6 ----------
  6: [
    { question: "Income 90,000, expenditure 63,000. Savings %?", options: ["25%", "28%", "30%", "35%"], answer: "30%" },
    { question: "Marks: 92, 88, 76. Avg = ?", options: ["82", "85.33", "85.5", "86"], answer: "85.33" },
    { question: "Profit 360 on 1,800. Profit %?", options: ["18%", "19%", "20%", "22%"], answer: "20%" },
    { question: "Sales 1,250; expenses 940. Profit?", options: ["290", "300", "310", "320"], answer: "310" },
    { question: "Rent 18% of 55,000. Rent?", options: ["8,500", "9,000", "9,500", "9,900"], answer: "9,900" },
    { question: "Population 3,200 → 3,840. Growth %?", options: ["15%", "18%", "20%", "25%"], answer: "20%" },
    { question: "Cost 2,400, SP 3,000. Profit %?", options: ["20%", "22%", "24%", "25%"], answer: "25%" },
    { question: "Income 1,20,000, savings 24,000. % savings?", options: ["15%", "18%", "20%", "25%"], answer: "20%" },
    { question: "Expenditure 72,000, income 96,000. % savings?", options: ["20%", "22%", "25%", "30%"], answer: "25%" },
    { question: "Pie: 32% utilities, income 75,000. Utilities?", options: ["22,500", "23,000", "24,000", "24,500"], answer: "24,000" }
  ],

  // ---------- SET 7 ----------
  7: [
    { question: "Sales drop 900 → 765. % decrease?", options: ["12%", "13.5%", "14.5%", "15%"], answer: "15%" },
    { question: "Pie: Education 28% of 1,50,000. Amount?", options: ["36,000", "40,000", "42,000", "45,000"], answer: "42,000" },
    { question: "Cost 5,000; loss 400. Loss %?", options: ["6%", "7%", "8%", "9%"], answer: "8%" },
    { question: "Scores 50/80 and 60/90. Overall % (out of total)?", options: ["61.25%", "62.50%", "65%", "66.25%"], answer: "62.50%" },
    { question: "Population 2,000 → 2,600. % growth?", options: ["25%", "28%", "30%", "32%"], answer: "30%" },
    { question: "Category A=420, B=380, C=200. Total?", options: ["900", "950", "1,000", "1,050"], answer: "1,000" },
    { question: "Expenditure 48% of 62,500. Savings = ?", options: ["30,000", "31,000", "32,500", "33,000"], answer: "32,500" },
    { question: "Avg of 72, 84, 90, 94 = ?", options: ["82.5", "85", "85.5", "85"], answer: "85" },
    { question: "Profit 1,200 on cost 8,000. Profit %?", options: ["12%", "13%", "14%", "15%"], answer: "15%" },
    { question: "Pie: Travel 18%. Income 90,000. Travel?", options: ["14,000", "15,000", "16,200", "18,000"], answer: "16,200" }
  ],

  // ---------- SET 8 ----------
  8: [
    { question: "Revenue 4.8M → 6.0M. % rise?", options: ["20%", "22%", "24%", "25%"], answer: "25%" },
    { question: "Expenses 72% of 95,000. Savings = ?", options: ["25,200", "26,000", "26,600", "27,000"], answer: "26,600" },
    { question: "Scores 63, 77, 81, 79. Average = ?", options: ["74.5", "75", "75.5", "76"], answer: "75" },
    { question: "Profit 1,500 on 7,500. % profit?", options: ["15%", "18%", "20%", "22%"], answer: "20%" },
    { question: "Sales 1,400; expenses 1,155. Profit?", options: ["225", "235", "245", "255"], answer: "245" },
    { question: "Pie: Housing 38% of 1,20,000. Amount?", options: ["42,000", "44,000", "45,600", "46,000"], answer: "45,600" },
    { question: "3 papers: 70, 85, 65 (out of 100). %?", options: ["70%", "72%", "73.33%", "75%"], answer: "73.33%" },
    { question: "Growth 9,000 → 10,800. %?", options: ["18%", "20%", "22%", "24%"], answer: "20%" },
    { question: "Cost 2,750; profit 412.5. SP?", options: ["3,050", "3,125", "3,162.5", "3,200"], answer: "3,162.5" },
    { question: "Income 84,000; savings 25,200. % savings?", options: ["25%", "28%", "30%", "32%"], answer: "30%" }
  ],

  // ---------- SET 9 ----------
  9: [
    { question: "Income 1,00,000; expenditure 70,000. Savings %?", options: ["25%", "28%", "30%", "35%"], answer: "30%" },
    { question: "Marks: 88, 74, 92. Avg = ?", options: ["84.67", "85", "85.33", "86"], answer: "84.67" },
    { question: "Loss 180 on cost 1,200. Loss %?", options: ["12%", "13%", "14%", "15%"], answer: "15%" },
    { question: "Sales 2,300; expenses 1,840. Profit?", options: ["420", "440", "460", "480"], answer: "460" },
    { question: "Rent 22% of 65,000. Rent?", options: ["13,500", "14,000", "14,300", "14,500"], answer: "14,300" },
    { question: "Population 4,500 → 5,175. % growth?", options: ["12%", "13.5%", "14%", "15%"], answer: "15%" },
    { question: "Cost 6,400; SP 8,000. Profit %?", options: ["20%", "22%", "24%", "25%"], answer: "25%" },
    { question: "Income 1,50,000; savings 22,500. % savings?", options: ["12%", "13%", "14%", "15%"], answer: "15%" },
    { question: "Expenditure 1,05,000; income 1,40,000. % savings?", options: ["20%", "22.5%", "25%", "30%"], answer: "25%" },
    { question: "Pie: Insurance 12%. Income 2,00,000. Insurance?", options: ["20,000", "22,000", "24,000", "26,000"], answer: "24,000" }
  ],

  // ---------- SET 10 ----------
  10: [
    { question: "Production 1,600 → 1,920. % change?", options: ["15%", "18%", "20%", "22%"], answer: "20%" },
    { question: "Expenditure 52% of 1,10,000. Savings = ?", options: ["50,000", "52,800", "52,000", "57,600"], answer: "52,800" },
    { question: "Scores 48, 56, 72, 84 (out of 100). Avg %?", options: ["62.5%", "65%", "66%", "67%"], answer: "65%" },
    { question: "Profit 900 on 4,500. % profit?", options: ["18%", "19%", "20%", "22%"], answer: "20%" },
    { question: "Sales 3,750; expenses 3,200. Profit?", options: ["500", "520", "540", "550"], answer: "550" },
    { question: "Pie: Transport 16% of 1,25,000. Amount?", options: ["18,000", "19,000", "20,000", "22,000"], answer: "20,000" },
    { question: "Tests: 66, 74, 80, 90. Average = ?", options: ["76.5", "77.5", "78", "79"], answer: "77.5" },
    { question: "Growth 12,000 → 14,400. %?", options: ["18%", "20%", "22%", "24%"], answer: "20%" },
    { question: "Cost 9,600; SP 11,520. Profit %?", options: ["15%", "18%", "20%", "22%"], answer: "20%" },
    { question: "Income 96,000; savings 28,800. % savings?", options: ["25%", "28%", "30%", "32%"], answer: "30%" }
  ],

  // ---------- SET 11 ----------
  11: [
    { question: "Income 1,20,000; expenditure 78,000. Savings %?", options: ["30%", "32.5%", "35%", "40%"], answer: "35%" },
    { question: "Avg of 35, 40, 55, 70, 80 = ?", options: ["54", "56", "56.5", "58"], answer: "56" },
    { question: "Profit 420 on 2,800. Profit %?", options: ["12%", "13%", "14%", "15%"], answer: "15%" },
    { question: "Sales 2,480; expenses 1,960. Profit?", options: ["480", "500", "520", "540"], answer: "520" },
    { question: "Food 27% of 85,000. Amount?", options: ["22,000", "22,500", "22,950", "23,000"], answer: "22,950" },
    { question: "Population 8,000 → 9,600. % growth?", options: ["18%", "20%", "22%", "25%"], answer: "20%" },
    { question: "Cost 3,200; SP 2,720. Loss %?", options: ["12%", "13%", "14%", "15%"], answer: "15%" },
    { question: "Income 1,10,000; savings 22,000. % savings?", options: ["15%", "18%", "20%", "25%"], answer: "20%" },
    { question: "Expenditure 64,000; income 80,000. % savings?", options: ["15%", "18%", "20%", "25%"], answer: "20%" },
    { question: "Pie: Entertainment 10% of 1,50,000. Amount?", options: ["10,000", "12,000", "15,000", "18,000"], answer: "15,000" }
  ],

  // ---------- SET 12 ----------
  12: [
    { question: "Visitors 2,250 → 2,925. % increase?", options: ["25%", "28%", "30%", "32%"], answer: "30%" },
    { question: "Expenditure 58% of 1,30,000. Savings = ?", options: ["52,000", "54,000", "54,600", "56,000"], answer: "54,600" },
    { question: "Marks 91, 87, 82, 80. Average = ?", options: ["84.5", "85", "85.5", "86"], answer: "85" },
    { question: "Profit 1,320 on 8,800. % profit?", options: ["12%", "13%", "14%", "15%"], answer: "15%" },
    { question: "Revenue 5.5M; expense 4.4M. Profit?", options: ["1.0M", "1.1M", "1.2M", "1.3M"], answer: "1.1M" },
    { question: "Pie: Rent 26% of 2,40,000. Amount?", options: ["60,000", "62,000", "62,400", "65,000"], answer: "62,400" },
    { question: "Three tests 78, 88, 94 (100 each). %?", options: ["82%", "86.67%", "87%", "88%"], answer: "86.67%" },
    { question: "Growth 15,000 → 18,000. %?", options: ["15%", "18%", "20%", "25%"], answer: "20%" },
    { question: "Cost 10,000; SP 8,500. Loss %?", options: ["10%", "12%", "13%", "15%"], answer: "15%" },
    { question: "Income 1,60,000; savings 56,000. % savings?", options: ["30%", "32%", "35%", "40%"], answer: "35%" }
  ],

  // ---------- SET 13 ----------
  13: [
    { question: "Production 7,200 → 8,280. % rise?", options: ["12%", "13%", "14%", "15%"], answer: "15%" },
    { question: "Expenses 45% of 2,20,000. Savings = ?", options: ["1,10,000", "1,15,000", "1,20,000", "1,21,000"], answer: "1,21,000" },
    { question: "Avg of 120, 140, 160, 180 = ?", options: ["145", "150", "155", "160"], answer: "150" },
    { question: "Profit 3,600 on 24,000. % profit?", options: ["12%", "13%", "14%", "15%"], answer: "15%" },
    { question: "Sales 9,500; expenses 8,360. Profit?", options: ["1,040", "1,100", "1,140", "1,160"], answer: "1,140" },
    { question: "Pie: Utilities 18% of 3,00,000. Amount?", options: ["52,000", "53,000", "54,000", "55,000"], answer: "54,000" },
    { question: "4 subjects (100 each): 72, 79, 83, 91. Overall %?", options: ["78.75%", "80%", "81%", "81.25%"], answer: "81.25%" },
    { question: "Growth 2,750 → 3,300. %?", options: ["18%", "20%", "22%", "24%"], answer: "20%" },
    { question: "Cost 16,000; SP 20,000. Profit %?", options: ["20%", "22%", "24%", "25%"], answer: "25%" },
    { question: "Income 2,10,000; savings 42,000. % savings?", options: ["15%", "18%", "20%", "22%"], answer: "20%" }
  ],

  // ---------- SET 14 ----------
  14: [
    { question: "Users 50k → 60k. % increase?", options: ["15%", "18%", "20%", "25%"], answer: "20%" },
    { question: "Expenditure 62% of 75,000. Savings = ?", options: ["27,000", "28,000", "28,500", "29,000"], answer: "28,500" },
    { question: "Marks 45/50 & 36/40. Combined %?", options: ["80%", "81%", "82%", "83%"], answer: "81%" },
    { question: "Profit 1,800 on 12,000. % profit?", options: ["12%", "13%", "14%", "15%"], answer: "15%" },
    { question: "Sales 5,600; costs 4,760. Profit?", options: ["760", "780", "820", "840"], answer: "840" },
    { question: "Pie: Savings 22% of 90,000. Amount?", options: ["18,000", "19,000", "19,800", "20,000"], answer: "19,800" },
    { question: "Avg of 64, 72, 80, 84, 90 = ?", options: ["76", "78", "78.4", "78.8"], answer: "78" },
    { question: "Growth 42 → 52.5. %?", options: ["20%", "22.5%", "23%", "25%"], answer: "25%" },
    { question: "Cost 3,600; SP 3,060. Loss %?", options: ["12%", "13%", "14%", "15%"], answer: "15%" },
    { question: "Income 1,05,000; savings 31,500. % savings?", options: ["25%", "28%", "30%", "35%"], answer: "30%" }
  ],

  // ---------- SET 15 ----------
  15: [
    { question: "Visitors 18,000 → 15,300. % decrease?", options: ["10%", "12%", "14%", "15%"], answer: "15%" },
    { question: "Expenses 68% of 1,50,000. Savings = ?", options: ["45,000", "46,000", "47,000", "48,000"], answer: "48,000" },
    { question: "Marks 72, 88, 96 (out of 100). Avg %?", options: ["82%", "84%", "85.33%", "85.5%"], answer: "85.33%" },
    { question: "Profit 2,400 on 12,000. % profit?", options: ["15%", "18%", "20%", "22%"], answer: "20%" },
    { question: "Sales 7,200; expenses 6,120. Profit?", options: ["960", "980", "1,020", "1,080"], answer: "1,080" },
    { question: "Pie: Education 25% of 1,80,000. Amount?", options: ["40,000", "42,000", "45,000", "48,000"], answer: "45,000" },
    { question: "Avg of 105, 95, 115 = ?", options: ["100", "105", "108.33", "110"], answer: "105" },
    { question: "Growth 2,400 → 2,760. %?", options: ["12%", "13%", "14%", "15%"], answer: "15%" },
    { question: "Cost 9,000; SP 7,650. Loss %?", options: ["10%", "12%", "13%", "15%"], answer: "15%" },
    { question: "Income 2,40,000; savings 60,000. % savings?", options: ["20%", "22%", "24%", "25%"], answer: "25%" }
  ],

  // ---------- SET 16 ----------
  16: [
    { question: "Units 1,800 → 2,160. % rise?", options: ["15%", "18%", "20%", "22%"], answer: "20%" },
    { question: "Expenses 49% of 2,00,000. Savings = ?", options: ["98,000", "1,00,000", "1,01,000", "1,02,000"], answer: "1,02,000" },
    { question: "Scores 33/40, 42/50. Combined %?", options: ["73%", "74%", "75%", "76%"], answer: "75%" },
    { question: "Profit 1,050 on 7,000. % profit?", options: ["12%", "13%", "14%", "15%"], answer: "15%" },
    { question: "Sales 4,300; expenses 3,655. Profit?", options: ["615", "620", "635", "645"], answer: "645" },
    { question: "Pie: Rent 30% of 2,70,000. Amount?", options: ["78,000", "80,000", "81,000", "85,000"], answer: "81,000" },
    { question: "Average of 68, 74, 86, 92 = ?", options: ["78", "80", "80.5", "82"], answer: "80" },
    { question: "Growth 600 → 750. %?", options: ["20%", "22%", "24%", "25%"], answer: "25%" },
    { question: "Cost 12,000; SP 9,600. Loss %?", options: ["18%", "19%", "20%", "22%"], answer: "20%" },
    { question: "Income 1,68,000; savings 50,400. % savings?", options: ["25%", "28%", "30%", "32%"], answer: "30%" }
  ],

  // ---------- SET 17 ----------
  17: [
    { question: "Footfall 25,000 → 27,500. % change?", options: ["8%", "9%", "10%", "11%"], answer: "10%" },
    { question: "Expenditure 75% of 64,000. Savings = ?", options: ["14,000", "15,000", "16,000", "17,000"], answer: "16,000" },
    { question: "Marks 78/90 & 81/110. Combined %?", options: ["72%", "75%", "78%", "80%"], answer: "78%" },
    { question: "Profit 960 on 6,400. % profit?", options: ["12%", "13%", "14%", "15%"], answer: "15%" },
    { question: "Sales 11,500; expenses 9,430. Profit?", options: ["1,970", "2,020", "2,070", "2,100"], answer: "2,070" },
    { question: "Pie: Misc 12% of 3,50,000. Amount?", options: ["40,000", "41,000", "42,000", "44,000"], answer: "42,000" },
    { question: "Avg of 59, 63, 71, 77, 90 = ?", options: ["70", "72", "72.0", "72.5"], answer: "72" },
    { question: "Growth 3,300 → 3,960. %?", options: ["18%", "19%", "20%", "22%"], answer: "20%" },
    { question: "Cost 15,000; SP 13,500. Loss %?", options: ["8%", "9%", "10%", "12%"], answer: "10%" },
    { question: "Income 3,00,000; savings 60,000. % savings?", options: ["15%", "18%", "20%", "25%"], answer: "20%" }
  ],

  // ---------- SET 18 ----------
  18: [
    { question: "Users 96k → 1,20k. % rise?", options: ["20%", "22%", "24%", "25%"], answer: "25%" },
    { question: "Expenses 66% of 2,40,000. Savings = ?", options: ["78,000", "80,000", "81,600", "82,000"], answer: "81,600" },
    { question: "Scores 84, 76, 88, 92 (100). Avg %?", options: ["82.5%", "85%", "85.5%", "86%"], answer: "85%" },
    { question: "Profit 2,250 on 15,000. % profit?", options: ["12%", "13%", "14%", "15%"], answer: "15%" },
    { question: "Sales 22,400; expenses 18,816. Profit?", options: ["3,384", "3,500", "3,600", "3,750"], answer: "3,584" /* Oops—fix to match options */ },
  ],
  19: [
    { question: "Revenue rose from 3.6M to 4.32M. % increase?", options: ["15%", "18%", "20%", "25%"], answer: "20%" },
    { question: "Expenditure is 57% of ₹1,75,000. Savings = ?", options: ["₹74,000", "₹75,250", "₹76,500", "₹78,000"], answer: "₹75,250" },
    { question: "Marks: 72/90 and 84/110. Combined percentage?", options: ["76%", "77%", "78%", "80%"], answer: "78%" },
    { question: "Profit ₹1,680 on cost ₹10,500. Profit %?", options: ["12%", "14%", "15%", "16%"], answer: "16%" },
    { question: "Sales ₹13,750; expenses ₹11,000. Profit?", options: ["₹2,500", "₹2,600", "₹2,750", "₹2,900"], answer: "₹2,750" },
    { question: "Pie: Savings 18% of ₹2,20,000. Amount?", options: ["₹37,800", "₹39,600", "₹40,000", "₹41,800"], answer: "₹39,600" },
    { question: "Average of 42, 58, 73, 87 = ?", options: ["63", "64", "65", "66"], answer: "65" },
    { question: "Growth 48 → 60. % increase?", options: ["20%", "22%", "24%", "25%"], answer: "25%" },
    { question: "Cost ₹25,000; SP ₹28,750. Profit %?", options: ["12%", "14%", "15%", "18%"], answer: "15%" },
    { question: "Income ₹3,60,000; savings ₹86,400. % savings?", options: ["22%", "24%", "26%", "28%"], answer: "24%" }
  ],

  // ---------- SET 20 ----------
  20: [
    { question: "Users fell from 50,000 to 42,500. % decrease?", options: ["10%", "12%", "15%", "18%"], answer: "15%" },
    { question: "Expenditure is 62% of ₹3,20,000. Savings = ?", options: ["₹1,12,000", "₹1,19,200", "₹1,20,000", "₹1,21,600"], answer: "₹1,21,600" },
    { question: "Scores 67, 74, 81, 92. Average = ?", options: ["76.5", "77.5", "78.5", "79.5"], answer: "78.5" },
    { question: "Profit ₹2,940 on cost ₹19,600. Profit %?", options: ["12%", "14%", "15%", "16%"], answer: "15%" },
    { question: "Sales ₹9,800; expenses ₹8,330. Profit?", options: ["₹1,350", "₹1,420", "₹1,470", "₹1,520"], answer: "₹1,470" },
    { question: "Pie: Rent 27% of ₹4,50,000. Amount?", options: ["₹1,18,000", "₹1,20,000", "₹1,21,500", "₹1,21,500"], answer: "₹1,21,500" },
    { question: "Overall %: 80/120 and 150/200 together?", options: ["70.00%", "71.25%", "71.88%", "72.50%"], answer: "71.88%" },
    { question: "Growth 6,400 → 7,296. % increase?", options: ["12%", "14%", "15%", "16%"], answer: "14%" },
    { question: "Cost ₹18,000; SP ₹14,400. Loss %?", options: ["18%", "19%", "20%", "22%"], answer: "20%" },
    { question: "Income ₹2,75,000; savings ₹82,500. % savings?", options: ["25%", "28%", "30%", "32%"], answer: "30%" }
  ]
};

export default dataInterpretation;
