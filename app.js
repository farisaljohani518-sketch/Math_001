// ==========================================================================
// MATH 001 Mastery & Drill Platform - Application Logic Engine
// ==========================================================================

const QUESTION_BANK = [{"id": "p1-01", "module": "P.1", "topic": "Interval Notation", "difficulty": "Easy", "questionEn": "Express the inequality $-3 \\le x < 5$ in interval notation.", "questionAr": "عبّر عن المتباينة $-3 \\le x < 5$ بصيغة الفترات.", "options": ["$[-3, 5)$", "$(-3, 5]$", "$[-3, 5]$", "$(-3, 5)$"], "correctIndex": 0, "hint": "Square brackets [ ] mean included, parentheses ( ) mean excluded.", "explanation": "Since $x \\ge -3$, the left endpoint is closed: $[-3$. Since $x < 5$, the right endpoint is open: $5)$. Result: $[-3, 5)$.", "trapTip": "Be careful with strict ($<$) vs non-strict ($\\le$) inequality symbols."}, {"id": "p1-02", "module": "P.1", "topic": "Sets of Numbers", "difficulty": "Easy", "questionEn": "Which of the following numbers is an irrational number?", "questionAr": "أي من الأعداد التالية يُعد عدداً غير نسبي (Irrational)؟", "options": ["$-\\frac{22}{7}$", "$\\sqrt{7}$", "$0.\\overline{3}$", "$\\sqrt{49}$"], "correctIndex": 1, "hint": "Irrational numbers cannot be expressed as a ratio of two integers.", "explanation": "$\\sqrt{7}$ is non-repeating and non-terminating, so it is irrational. $-22/7$ is rational, $0.\\overline{3} = 1/3$ is rational, and $\\sqrt{49} = 7$ is an integer.", "trapTip": "$\\frac{22}{7}$ is a rational approximation of $\\pi$, but it is itself a rational number!"}, {"id": "p1-03", "module": "P.1", "topic": "Order of Operations", "difficulty": "Easy", "questionEn": "Evaluate the arithmetic expression: $18 - 3 \\times 2^2 + 8 \\div 2$", "questionAr": "احسب قيمة التعبير الحسابي: $18 - 3 \\times 2^2 + 8 \\div 2$", "options": ["$64$", "$16$", "$10$", "$22$"], "correctIndex": 2, "hint": "Follow PEMDAS: Parentheses, Exponents, Multiplication & Division (left to right), Addition & Subtraction.", "explanation": "1) $2^2 = 4$.\n2) $3 \\times 4 = 12$ and $8 \\div 2 = 4$.\n3) $18 - 12 + 4 = 6 + 4 = 10$.", "trapTip": "Do not subtract $18 - 3$ before performing the multiplication!"}, {"id": "p1-04", "module": "P.1", "topic": "Absolute Value", "difficulty": "Medium", "questionEn": "Simplify the expression without absolute value symbols: $|3 - \\pi|$", "questionAr": "بسّط التعبير التالي دون استخدام رمز القيمة المطلقة: $|3 - \\pi|$", "options": ["$3 - \\pi$", "$3 + \\pi$", "$-3 - \\pi$", "$\\pi - 3$"], "correctIndex": 3, "hint": "Recall that $|u| = -u$ when $u < 0$. Approximate $\\pi \\approx 3.1416$.", "explanation": "Since $\\pi > 3$, $3 - \\pi < 0$. Therefore, $|3 - \\pi| = -(3 - \\pi) = \\pi - 3$.", "trapTip": "Always check whether the quantity inside the absolute value is positive or negative before removing bars."}, {"id": "p1-05", "module": "P.1", "topic": "Distance on Number Line", "difficulty": "Easy", "questionEn": "Find the distance between $-8$ and $5$ on the real number line.", "questionAr": "أوجد المسافة بين العددين $-8$ و $5$ على خط الأعداد الحقيقية.", "options": ["$13$", "$-13$", "$3$", "$-3$"], "correctIndex": 0, "hint": "Distance formula: $d(a, b) = |b - a|$.", "explanation": "$d(-8, 5) = |5 - (-8)| = |5 + 8| = 13$. Distance is always non-negative.", "trapTip": "Distance cannot be negative."}, {"id": "p1-06", "module": "P.1", "topic": "Properties of Real Numbers", "difficulty": "Easy", "questionEn": "Which property of real numbers is illustrated by: $(x + 4) + y = x + (4 + y)$?", "questionAr": "ما هي خاصية الأعداد الحقيقية التي توضحها المعادلة: $(x + 4) + y = x + (4 + y)$؟", "options": ["Commutative Property of Addition", "Associative Property of Addition", "Distributive Property", "Additive Identity Property"], "correctIndex": 1, "hint": "Notice that the grouping (parentheses) changes, but the order of terms remains the same.", "explanation": "The associative property allows regrouping elements in addition without changing the sum.", "trapTip": "Do not confuse Associative (grouping) with Commutative (order)."}, {"id": "p1-07", "module": "P.1", "topic": "Sets of Numbers", "difficulty": "Medium", "questionEn": "Which of the following statements is FALSE?", "questionAr": "أي من العبارات التالية غير صحيحة (خاطئة)؟", "options": ["Every natural number is an integer.", "Every rational number is a real number.", "Every integer is a whole number.", "Zero is a whole number."], "correctIndex": 2, "hint": "Whole numbers are $\\mathbb{W} = \\{0, 1, 2, 3, \\dots\\}$.", "explanation": "Negative integers like $-3$ are integers, but NOT whole numbers.", "trapTip": "Whole numbers only include non-negative integers."}, {"id": "p1-08", "module": "P.1", "topic": "Interval Operations", "difficulty": "Medium", "questionEn": "Find the intersection: $(-4, 3] \\cap [-1, 7)$", "questionAr": "أوجد تقاطع الفترتين: $(-4, 3] \\cap [-1, 7)$", "options": ["$(-4, 7)$", "$(-1, 3)$", "$[-4, 7]$", "$[-1, 3]$"], "correctIndex": 3, "hint": "Intersection ($\\cap$) contains points belonging to BOTH intervals.", "explanation": "$-4 < x \\le 3$ and $-1 \\le x < 7$. The common region is $-1 \\le x \\le 3$, which is $[-1, 3]$.", "trapTip": "Check whether the boundary points are included in both sets."}, {"id": "p1-09", "module": "P.1", "topic": "Interval Operations", "difficulty": "Medium", "questionEn": "Find the union: $(-\\infty, 2) \\cup [1, 6]$", "questionAr": "أوجد اتحاد الفترتين: $(-\\infty, 2) \\cup [1, 6]$", "options": ["$(-\\infty, 6]$", "$[1, 2)$", "$(-\\infty, 6)$", "$[-1, 6]$"], "correctIndex": 0, "hint": "Union ($\\cup$) includes points belonging to either or both intervals.", "explanation": "Because $1 < 2$, the intervals overlap and span continuously from $-\\infty$ to $6$ (inclusive). Result: $(-\\infty, 6]$.", "trapTip": "Overlapping intervals merge into one single interval."}, {"id": "p1-10", "module": "P.1", "topic": "Evaluating Expressions", "difficulty": "Easy", "questionEn": "Evaluate $\\frac{x^2 - 3y}{2x + y}$ when $x = -3$ and $y = 2$.", "questionAr": "احسب قيمة التعبير $\\frac{x^2 - 3y}{2x + y}$ عندما يكون $x = -3$ و $y = 2$.", "options": ["$\\frac{3}{4}$", "$-\\frac{3}{4}$", "$-\\frac{15}{4}$", "$3$"], "correctIndex": 1, "hint": "Substitute carefully: $(-3)^2 = 9$.", "explanation": "Numerator: $(-3)^2 - 3(2) = 9 - 6 = 3$. Denominator: $2(-3) + 2 = -6 + 2 = -4$. Result: $-3/4$.", "trapTip": "$(-3)^2 = 9$, not $-9$."}, {"id": "p1-11", "module": "P.1", "topic": "Absolute Value", "difficulty": "Hard", "questionEn": "If $x < -2$, simplify the expression: $|x + 2| - |3 - x|$", "questionAr": "إذا كان $x < -2$ ، فبسّط التعبير: $|x + 2| - |3 - x|$", "options": ["$2x - 1$", "$-2x + 1$", "$-5$", "$5$"], "correctIndex": 2, "hint": "Test a value like $x = -4$ to determine signs inside the bars.", "explanation": "Since $x < -2$: $x + 2 < 0 \\implies |x + 2| = -(x + 2) = -x - 2$. Also $3 - x > 0 \\implies |3 - x| = 3 - x$. Thus $(-x - 2) - (3 - x) = -x - 2 - 3 + x = -5$.", "trapTip": "Carefully distribute the negative sign: $-(3 - x) = -3 + x$."}, {"id": "p1-12", "module": "P.1", "topic": "Order of Operations", "difficulty": "Medium", "questionEn": "Evaluate the expression: $4 - 2[5 - 3(2 - 7)]$", "questionAr": "احسب قيمة المقدار: $4 - 2[5 - 3(2 - 7)]$", "options": ["$36$", "$-24$", "$44$", "$-36$"], "correctIndex": 3, "hint": "Work from innermost parentheses outward.", "explanation": "1) $2 - 7 = -5$.\n2) $5 - 3(-5) = 5 + 15 = 20$.\n3) $2 \\times 20 = 40$.\n4) $4 - 40 = -36$.", "trapTip": "Do not subtract $4 - 2$ first!"}, {"id": "p1-13", "module": "P.1", "topic": "Properties of Real Numbers", "difficulty": "Easy", "questionEn": "What is the additive inverse of $-\\frac{5}{9}$?", "questionAr": "ما هو النظير الجمعي (Additive Inverse) للعدد $-\\frac{5}{9}$؟", "options": ["$\\frac{5}{9}$", "$-\\frac{9}{5}$", "$\\frac{9}{5}$", "$1$"], "correctIndex": 0, "hint": "The additive inverse of $a$ is $-a$, so $a + (-a) = 0$.", "explanation": "The additive inverse of $-5/9$ is $-(-5/9) = 5/9$.", "trapTip": "Additive inverse changes the sign; it does not flip the fraction."}, {"id": "p1-14", "module": "P.1", "topic": "Properties of Real Numbers", "difficulty": "Easy", "questionEn": "What is the multiplicative inverse (reciprocal) of $-2\\frac{1}{3}$?", "questionAr": "ما هو النظير الضربي (المقلوب) للعدد الكسري $-2\\frac{1}{3}$؟", "options": ["$\\frac{3}{7}$", "$-\\frac{3}{7}$", "$-\\frac{7}{3}$", "$\\frac{7}{3}$"], "correctIndex": 1, "hint": "Convert mixed fraction first: $-2\\frac{1}{3} = -\\frac{7}{3}$.", "explanation": "The reciprocal of $-7/3$ is $-3/7$. Their product is $(-7/3)(-3/7) = 1$.", "trapTip": "Reciprocal keeps the same sign; a negative number has a negative reciprocal."}, {"id": "p1-15", "module": "P.1", "topic": "Sets of Numbers", "difficulty": "Medium", "questionEn": "Let $S = \\{-3, 0, \\frac{2}{5}, \\sqrt{5}, \\pi, 9\\}$. How many numbers in $S$ are rational?", "questionAr": "لتكن المجموعة $S = \\{-3, 0, \\frac{2}{5}, \\sqrt{5}, \\pi, 9\\}$. كم عدداً في المجموعة $S$ يعتبر عدداً نسبياً؟", "options": ["$3$", "$5$", "$4$", "$2$"], "correctIndex": 2, "hint": "Rational numbers can be written as $a/b$ with integers $a, b$ ($b \\ne 0$).", "explanation": "Rational numbers: $-3, 0, 2/5, 9$ (4 numbers). Irrational: $\\sqrt{5}, \\pi$.", "trapTip": "Zero is an integer, hence rational ($0 = 0/1$)."}, {"id": "p1-16", "module": "P.1", "topic": "Distance on Number Line", "difficulty": "Medium", "questionEn": "If the distance between $x$ and $-3$ on the number line is $7$, what are all possible values of $x$?", "questionAr": "إذا كانت المسافة بين $x$ و $-3$ على خط الأعداد تساوي $7$، فما هي جميع القيم الممكنة لـ $x$؟", "options": ["$4 and 10$", "$-4 and 10$", "$-4 and -10$", "$4 and -10$"], "correctIndex": 3, "hint": "Equation: $|x - (-3)| = 7 \\implies |x + 3| = 7$.", "explanation": "$x + 3 = 7 \\implies x = 4$, or $x + 3 = -7 \\implies x = -10$.", "trapTip": "Distance goes both left and right from $-3$."}, {"id": "p1-17", "module": "P.1", "topic": "Interval Notation", "difficulty": "Easy", "questionEn": "Write in interval notation: all real numbers that are strictly greater than $-4$.", "questionAr": "اكتب بصيغة الفترات: جميع الأعداد الحقيقية الأكبر تماماً من $-4$.", "options": ["$(-4, \\infty)$", "$[-4, \\infty)$", "$(-\\infty, -4)$", "$[-4, \\infty]$"], "correctIndex": 0, "hint": "Strictly greater means $x > -4$.", "explanation": "The interval is $(-4, \\infty)$. Infinity always takes parentheses.", "trapTip": "Never use a bracket with $\\infty$."}, {"id": "p1-18", "module": "P.1", "topic": "Properties of Real Numbers", "difficulty": "Easy", "questionEn": "Which property justifies: $3(x + 2) = 3x + 6$?", "questionAr": "ما هي الخاصية التي تبرر العبارة: $3(x + 2) = 3x + 6$؟", "options": ["Associative Property", "Distributive Property", "Commutative Property", "Multiplicative Identity"], "correctIndex": 1, "hint": "$a(b + c) = ab + ac$.", "explanation": "The factor $3$ is distributed to both terms inside the parentheses.", "trapTip": "Distribute the factor to ALL terms in the parentheses."}, {"id": "p1-19", "module": "P.1", "topic": "Evaluating Expressions", "difficulty": "Medium", "questionEn": "Evaluate $\\frac{|a - b| - |a + b|}{|ab|}$ if $a = -2$ and $b = 3$.", "questionAr": "احسب قيمة المقدار $\\frac{|a - b| - |a + b|}{|ab|}$ إذا كان $a = -2$ و $b = 3$.", "options": ["$-\\frac{2}{3}$", "$1$", "$\\frac{2}{3}$", "$\\frac{4}{3}$"], "correctIndex": 2, "hint": "Calculate absolute values first: $|a-b| = |-5| = 5$, $|a+b| = |1| = 1$.", "explanation": "Numerator: $5 - 1 = 4$. Denominator: $|(-2)(3)| = |-6| = 6$. Result: $4/6 = 2/3$.", "trapTip": "$|-2 - 3| = 5$, not $-5$."}, {"id": "p1-20", "module": "P.1", "topic": "Order of Operations", "difficulty": "Medium", "questionEn": "Evaluate: $24 \\div 4 \\times 2 - (3 - 7)^2$", "questionAr": "احسب قيمة: $24 \\div 4 \\times 2 - (3 - 7)^2$", "options": ["$-13$", "$12$", "$16$", "$-4$"], "correctIndex": 3, "hint": "Division and multiplication have equal precedence; evaluate left to right.", "explanation": "1) $3 - 7 = -4 \\implies (-4)^2 = 16$.\n2) $24 \\div 4 = 6 \\implies 6 \\times 2 = 12$.\n3) $12 - 16 = -4$.", "trapTip": "Do not do $4 \\times 2 = 8$ before division!"}, {"id": "p1-21", "module": "P.1", "topic": "Interval Operations", "difficulty": "Hard", "questionEn": "Find $[-3, 4) \\cap (0, 6]$.", "questionAr": "أوجد ناتج التقاطع: $[-3, 4) \\cap (0, 6]$.", "options": ["$(0, 4)$", "$[0, 4)$", "$(0, 4]$", "$[-3, 6]$"], "correctIndex": 0, "hint": "Both $-3 \\le x < 4$ AND $0 < x \\le 6$ must hold.", "explanation": "The overlap is $0 < x < 4$. In interval notation: $(0, 4)$.", "trapTip": "$0$ is excluded in $(0, 6]$, so it must have a parenthesis."}, {"id": "p1-22", "module": "P.1", "topic": "Interval Operations", "difficulty": "Hard", "questionEn": "What is the complement of $[-2, 5)$ in the set of real numbers $\\mathbb{R}$?", "questionAr": "ما هي متممة الفترة $[-2, 5)$ في مجموعة الأعداد الحقيقية $\\mathbb{R}$؟", "options": ["$(-\\infty, -2] \\cup (5, \\infty)$", "$(-\\infty, -2) \\cup [5, \\infty)$", "$(-\\infty, -2) \\cup (5, \\infty)$", "$[-5, 2)$"], "correctIndex": 1, "hint": "Complement means all real numbers NOT in $[-2, 5)$.", "explanation": "Since $[-2, 5) = \\{x \\mid -2 \\le x < 5\\}$, the complement is $x < -2$ or $x \\ge 5$, which is $(-\\infty, -2) \\cup [5, \\infty)$.", "trapTip": "In complement, $[-2$ becomes excluded $(-2$, and $5)$ becomes included $[5$."}, {"id": "p1-23", "module": "P.1", "topic": "Absolute Value", "difficulty": "Hard", "questionEn": "Simplify $|\\sqrt{2} - 2| + |\\sqrt{2} - 1|$.", "questionAr": "بسّط المقدار: $|\\sqrt{2} - 2| + |\\sqrt{2} - 1|$.", "options": ["$2\\sqrt{2} - 3$", "$3 - 2\\sqrt{2}$", "$1$", "$-1$"], "correctIndex": 2, "hint": "Note $\\sqrt{2} \\approx 1.414$.", "explanation": "$\\sqrt{2} - 2 < 0 \\implies |\\sqrt{2} - 2| = 2 - \\sqrt{2}$. $\\sqrt{2} - 1 > 0 \\implies |\\sqrt{2} - 1| = \\sqrt{2} - 1$. Adding: $(2 - \\sqrt{2}) + (\\sqrt{2} - 1) = 1$.", "trapTip": "The radical terms cancel out cleanly."}, {"id": "p1-24", "module": "P.1", "topic": "Sets of Numbers", "difficulty": "Easy", "questionEn": "Which set is closed under subtraction?", "questionAr": "أي من المجموعات التالية مغلقة تحت عملية الطرح؟", "options": ["Natural numbers ($\\mathbb{N}$)", "Whole numbers ($\\mathbb{W}$)", "Irrational numbers ($\\mathbb{I}$)", "Integers ($\\mathbb{Z}$)"], "correctIndex": 3, "hint": "A set is closed under an operation if applying it always produces an element of that set.", "explanation": "Subtracting any two integers yields an integer. Natural numbers are not closed under subtraction ($2 - 5 = -3 \\notin \\mathbb{N}$).", "trapTip": "Natural and whole numbers don't contain negative numbers."}, {"id": "p1-25", "module": "P.1", "topic": "Sets of Numbers", "difficulty": "Medium", "questionEn": "Which of the following numbers is prime?", "questionAr": "أي من الأعداد التالية هو عدد أولي (Prime Number)؟", "options": ["$53$", "$51$", "$57$", "$91$"], "correctIndex": 0, "hint": "A prime number has exactly two distinct positive divisors: 1 and itself.", "explanation": "$51 = 3 \\times 17$, $57 = 3 \\times 19$, $91 = 7 \\times 13$. 53 has no divisors other than 1 and 53.", "trapTip": "91 looks prime, but $7 \\times 13 = 91$!"}, {"id": "p1-26", "module": "P.1", "topic": "Properties of Real Numbers", "difficulty": "Easy", "questionEn": "Which statement illustrates the Commutative Property of Multiplication?", "questionAr": "أي عبارة توضح خاصية الإبدال في الضرب (Commutative Property of Multiplication)؟", "options": ["$x(y z) = (x y)z$", "$(x + 1) \\cdot 5 = 5 \\cdot (x + 1)$", "$x \\cdot 1 = x$", "$x(y + z) = xy + xz$"], "correctIndex": 1, "hint": "Commutative property states $ab = ba$.", "explanation": "The factors $(x + 1)$ and $5$ simply swap positions.", "trapTip": "Associative changes parentheses; commutative changes order."}, {"id": "p1-27", "module": "P.1", "topic": "Evaluating Expressions", "difficulty": "Medium", "questionEn": "Evaluate the algebraic expression $\\frac{|2x - y^2|}{x - 3y}$ when $x = -4$ and $y = -2$.", "questionAr": "احسب قيمة التعبير الجبري $\\frac{|2x - y^2|}{x - 3y}$ عندما يكون $x = -4$ و $y = -2$.", "options": ["$-6$", "$12$", "$6$", "$-12$"], "correctIndex": 2, "hint": "Compute numerator and denominator separately.", "explanation": "Numerator: $|2(-4) - (-2)^2| = |-8 - 4| = |-12| = 12$. Denominator: $-4 - 3(-2) = -4 + 6 = 2$. Result: $12 / 2 = 6$.", "trapTip": "$(-2)^2 = 4$, so $-y^2 = -4$."}, {"id": "p1-28", "module": "P.1", "topic": "Interval Notation", "difficulty": "Medium", "questionEn": "The inequality $|x - 5| \\le 3$ is equivalent to which interval?", "questionAr": "المتباينة $|x - 5| \\le 3$ تكافئ أي فترة من الفترات التالية؟", "options": ["$(2, 8)$", "$[-8, -2]$", "$[2, 5]$", "$[2, 8]$"], "correctIndex": 3, "hint": "$|u| \\le c \\iff -c \\le u \\le c$.", "explanation": "$-3 \\le x - 5 \\le 3 \\implies 2 \\le x \\le 8$. In interval notation: $[2, 8]$.", "trapTip": "Distance from 5 is at most 3: $[5-3, 5+3] = [2, 8]$."}, {"id": "p1-29", "module": "P.1", "topic": "Interval Notation", "difficulty": "Medium", "questionEn": "The inequality $|2x + 1| > 5$ is equivalent to which union of intervals?", "questionAr": "المتباينة $|2x + 1| > 5$ تكافئ أي اتحاد فترات مما يلي؟", "options": ["$(-\\infty, -3) \\cup (2, \\infty)$", "$(-3, 2)$", "$[-3, 2]$", "$(-\\infty, -3] \\cup [2, \\infty)$"], "correctIndex": 0, "hint": "$|u| > c \\iff u < -c \\text{ or } u > c$.", "explanation": "$2x + 1 < -5 \\implies 2x < -6 \\implies x < -3$.\n$2x + 1 > 5 \\implies 2x > 4 \\implies x > 2$.\nResult: $(-\\infty, -3) \\cup (2, \\infty)$.", "trapTip": "Strict inequalities use open parentheses."}, {"id": "p1-30", "module": "P.1", "topic": "Sets of Numbers", "difficulty": "Easy", "questionEn": "Which of the following numbers is undefined in the real number system?", "questionAr": "أي من المقادير التالية غير معرّف (Undefined) في نظام الأعداد الحقيقية؟", "options": ["$\\frac{0}{7}$", "$\\frac{7}{0}$", "$0^5$", "$\\sqrt{0}$"], "correctIndex": 1, "hint": "Division by zero is undefined.", "explanation": "$\\frac{7}{0}$ is undefined. Note that $\\frac{0}{7} = 0$.", "trapTip": "Zero in numerator is 0; zero in denominator is undefined."}, {"id": "p1-31", "module": "P.1", "topic": "Order of Operations", "difficulty": "Hard", "questionEn": "Evaluate: $\\frac{5 - 3|2 - 4^2|}{-2^2 + 1}$", "questionAr": "احسب قيمة المقدار: $\\frac{5 - 3|2 - 4^2|}{-2^2 + 1}$", "options": ["$-\\frac{37}{3}$", "$7$", "$\\frac{37}{3}$", "$-7$"], "correctIndex": 2, "hint": "Be careful: $-2^2 = -4$.", "explanation": "Numerator: $2 - 16 = -14 \\implies |-14| = 14$. Then $5 - 3(14) = 5 - 42 = -37$.\nDenominator: $-4 + 1 = -3$.\nResult: $\\frac{-37}{-3} = \\frac{37}{3}$.", "trapTip": "$-2^2$ is $-4$, whereas $(-2)^2$ is $+4$."}, {"id": "p1-32", "module": "P.1", "topic": "Absolute Value", "difficulty": "Medium", "questionEn": "If $x > 4$, simplify: $|4 - x| + |x + 1|$", "questionAr": "إذا كان $x > 4$ ، فبسّط: $|4 - x| + |x + 1|$", "options": ["$5$", "$3$", "$-2x + 3$", "$2x - 3$"], "correctIndex": 3, "hint": "Determine the sign of each term.", "explanation": "Since $x > 4$, $4 - x < 0 \\implies |4 - x| = x - 4$. Also $x + 1 > 0 \\implies |x + 1| = x + 1$. Adding: $(x - 4) + (x + 1) = 2x - 3$.", "trapTip": "Don't assume $|4 - x| = 4 - x$ without verifying the sign."}, {"id": "p1-33", "module": "P.1", "topic": "Distance on Number Line", "difficulty": "Easy", "questionEn": "The distance between points $A(-15)$ and $B(-3)$ on the number line is:", "questionAr": "المسافة بين النقطتين $A(-15)$ و $B(-3)$ على خط الأعداد هي:", "options": ["$12$", "$-12$", "$18$", "$-18$"], "correctIndex": 0, "hint": "Use $d = |b - a|$.", "explanation": "$d = |-3 - (-15)| = |-3 + 15| = |12| = 12$.", "trapTip": "Distance is always positive."}, {"id": "p1-34", "module": "P.1", "topic": "Properties of Real Numbers", "difficulty": "Easy", "questionEn": "Which of the following illustrates the Additive Identity Property?", "questionAr": "أي مما يلي يوضح خاصية المحايد الجمعي (Additive Identity)؟", "options": ["$x + (-x) = 0$", "$x + 0 = x$", "$x \\cdot 1 = x$", "$x + y = y + x$"], "correctIndex": 1, "hint": "Additive identity is 0.", "explanation": "Adding zero to any number preserves its identity: $x + 0 = x$.", "trapTip": "$x + (-x) = 0$ is the inverse property, not identity."}, {"id": "p1-35", "module": "P.1", "topic": "Properties of Real Numbers", "difficulty": "Easy", "questionEn": "Which of the following illustrates the Multiplicative Identity Property?", "questionAr": "أي مما يلي يوضح خاصية المحايد الضربي (Multiplicative Identity)؟", "options": ["$x \\cdot \\frac{1}{x} = 1$", "$x \\cdot 0 = 0$", "$x \\cdot 1 = x$", "$xy = yx$"], "correctIndex": 2, "hint": "Multiplicative identity is 1.", "explanation": "Multiplying any number by 1 preserves its identity: $x \\cdot 1 = x$.", "trapTip": "$x \\cdot (1/x) = 1$ is the inverse property."}, {"id": "p1-36", "module": "P.1", "topic": "Sets of Numbers", "difficulty": "Medium", "questionEn": "Which number is an integer but NOT a natural number?", "questionAr": "أي من الأعداد التالية يُعد عدداً صحيحاً (Integer) ولكنه ليس عدداً طبيعياً (Natural)؟", "options": ["$5$", "$\\frac{1}{2}$", "$\\sqrt{2}$", "$-5$"], "correctIndex": 3, "hint": "Natural numbers are positive integers $\\{1, 2, 3, \\dots\\}$.", "explanation": "$-5$ is an integer ($\\mathbb{Z}$), but not in $\\mathbb{N}$.", "trapTip": "Natural numbers start at 1."}, {"id": "p1-37", "module": "P.1", "topic": "Interval Notation", "difficulty": "Easy", "questionEn": "Express the interval depicted by $x \\le -1$ in interval notation.", "questionAr": "عبّر عن الفترة $x \\le -1$ بصيغة الفترات.", "options": ["$(-\\infty, -1]$", "$(-\\infty, -1)$", "$[-1, \\infty)$", "$(-1, \\infty)$"], "correctIndex": 0, "hint": "All numbers $\\le -1$ extend to negative infinity.", "explanation": "$x \\le -1$ is written as $(-\\infty, -1]$.", "trapTip": "$\\le$ requires a bracket on $-1$."}, {"id": "p1-38", "module": "P.1", "topic": "Interval Operations", "difficulty": "Medium", "questionEn": "Find $[-2, 5) \\cup [3, 8]$.", "questionAr": "أوجد ناتج الاتحاد: $[-2, 5) \\cup [3, 8]$.", "options": ["$[-2, 8)$", "$[-2, 8]$", "$[3, 5)$", "$(-2, 8]$"], "correctIndex": 1, "hint": "Check the overlap and endpoints.", "explanation": "The first interval covers $[-2, 5)$ and the second covers $[3, 8]$. Since $[3, 8]$ covers 5, the gap at 5 is closed. The union is $[-2, 8]$.", "trapTip": "5 is included in the second set, so the union includes 5."}, {"id": "p1-39", "module": "P.1", "topic": "Order of Operations", "difficulty": "Medium", "questionEn": "Evaluate: $15 - 3 \\times [2 + 4 \\times (1 - 3)^3] \\div 6$", "questionAr": "احسب قيمة المقدار: $15 - 3 \\times [2 + 4 \\times (1 - 3)^3] \\div 6$", "options": ["$0$", "$-15$", "$30$", "$10$"], "correctIndex": 2, "hint": "Calculate $(1 - 3)^3 = (-2)^3 = -8$.", "explanation": "1) $4 \\times (-8) = -32$.\n2) $2 + (-32) = -30$.\n3) $3 \\times (-30) \\div 6 = -90 \\div 6 = -15$.\n4) $15 - (-15) = 30$.", "trapTip": "Minus a negative becomes plus."}, {"id": "p1-40", "module": "P.1", "topic": "Evaluating Expressions", "difficulty": "Hard", "questionEn": "If $x = -2$ and $y = 3$, evaluate $\\frac{-x^2 - 2|x - y|}{-(x - y)^2}$.", "questionAr": "إذا كان $x = -2$ و $y = 3$ ، فاحسب قيمة $\\frac{-x^2 - 2|x - y|}{-(x - y)^2}$.", "options": ["$-\\frac{14}{25}$", "$\\frac{6}{25}$", "$-\\frac{6}{25}$", "$\\frac{14}{25}$"], "correctIndex": 3, "hint": "$-x^2 = -(-2)^2 = -4$.", "explanation": "Numerator: $-4 - 2|-5| = -4 - 10 = -14$.\nDenominator: $-(-2 - 3)^2 = -(-5)^2 = -25$.\nResult: $\\frac{-14}{-25} = \\frac{14}{25}$.", "trapTip": "Negative divided by negative is positive."}, {"id": "p2-01", "module": "P.2", "topic": "Laws of Exponents", "difficulty": "Easy", "questionEn": "Simplify: $(2x^3 y^{-2})^3$", "questionAr": "بسّط المقدار التالي: $(2x^3 y^{-2})^3$", "options": ["$\\frac{8x^9}{y^6}$", "$\\frac{6x^9}{y^6}$", "$\\frac{8x^6}{y^5}$", "$8x^9 y^6$"], "correctIndex": 0, "hint": "Raise each factor inside parentheses to the third power: $(ab)^n = a^n b^n$ and $(a^m)^n = a^{mn}$.", "explanation": "$(2x^3 y^{-2})^3 = 2^3 \\cdot (x^3)^3 \\cdot (y^{-2})^3 = 8 x^9 y^{-6} = \\frac{8x^9}{y^6}$.", "trapTip": "Don't forget to raise the coefficient $2$ to the power of $3$ ($2^3 = 8$, not $2 \\times 3 = 6$)!"}, {"id": "p2-02", "module": "P.2", "topic": "Rational Exponents", "difficulty": "Easy", "questionEn": "Evaluate: $27^{2/3}$", "questionAr": "احسب قيمة المقدار: $27^{2/3}$", "options": ["$18$", "$9$", "$3$", "$81$"], "correctIndex": 1, "hint": "Recall $a^{m/n} = (\\sqrt[n]{a})^m$.", "explanation": "$27^{2/3} = (\\sqrt[3]{27})^2 = 3^2 = 9$.", "trapTip": "Take the cube root first, then square, rather than squaring 27 first."}, {"id": "p2-03", "module": "P.2", "topic": "Negative Exponents", "difficulty": "Medium", "questionEn": "Simplify and write with positive exponents only: $\\left(\\frac{3x^{-2}}{y^3}\\right)^{-2}$", "questionAr": "بسّط واكتب باستخدام أسس موجبة فقط: $\\left(\\frac{3x^{-2}}{y^3}\\right)^{-2}$", "options": ["$\\frac{9x^4}{y^6}$", "$\\frac{y^6}{9x^4}$", "$\\frac{x^4 y^6}{9}$", "$\\frac{x^4}{9y^6}$"], "correctIndex": 2, "hint": "Flip the fraction to eliminate the outer negative exponent: $(a/b)^{-n} = (b/a)^n$.", "explanation": "$\\left(\\frac{3x^{-2}}{y^3}\\right)^{-2} = \\left(\\frac{y^3}{3x^{-2}}\\right)^2 = \\left(\\frac{x^2 y^3}{3}\\right)^2 = \\frac{x^4 y^6}{3^2} = \\frac{x^4 y^6}{9}$.", "trapTip": "Square the denominator: $3^2 = 9$ in the denominator."}, {"id": "p2-04", "module": "P.2", "topic": "Simplifying Radicals", "difficulty": "Easy", "questionEn": "Simplify the radical: $\\sqrt{75x^4 y^7}$ (assume all variables represent positive real numbers).", "questionAr": "بسّط الجذر التالي: $\\sqrt{75x^4 y^7}$ (افترض أن جميع المتغيرات أعداد حقيقية موجبة).", "options": ["$5x^2 y^3 \\sqrt{3}$", "$25x^2 y^3 \\sqrt{3y}$", "$5x^4 y^6 \\sqrt{3y}$", "$5x^2 y^3 \\sqrt{3y}$"], "correctIndex": 3, "hint": "Factor into perfect squares: $75 = 25 \\times 3$, $x^4 = (x^2)^2$, $y^7 = y^6 \\cdot y = (y^3)^2 \\cdot y$.", "explanation": "$\\sqrt{75 x^4 y^7} = \\sqrt{25 \\cdot 3 \\cdot (x^2)^2 \\cdot (y^3)^2 \\cdot y} = 5 x^2 y^3 \\sqrt{3y}$.", "trapTip": "Remember that $\\sqrt{y^7} = y^3\\sqrt{y}$, leaving $y$ inside the radical."}, {"id": "p2-05", "module": "P.2", "topic": "Combining Radicals", "difficulty": "Medium", "questionEn": "Simplify: $3\\sqrt{12} - 2\\sqrt{27} + \\sqrt{75}$", "questionAr": "بسّط التعبير التالي: $3\\sqrt{12} - 2\\sqrt{27} + \\sqrt{75}$", "options": ["$5\\sqrt{3}$", "$\\sqrt{3}$", "$7\\sqrt{3}$", "$6\\sqrt{3}$"], "correctIndex": 0, "hint": "Simplify each radical to a multiple of $\\sqrt{3}$.", "explanation": "1) $3\\sqrt{12} = 3\\sqrt{4 \\times 3} = 3(2\\sqrt{3}) = 6\\sqrt{3}$.\n2) $2\\sqrt{27} = 2\\sqrt{9 \\times 3} = 2(3\\sqrt{3}) = 6\\sqrt{3}$.\n3) $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$.\nCombined: $6\\sqrt{3} - 6\\sqrt{3} + 5\\sqrt{3} = 5\\sqrt{3}$.", "trapTip": "First simplify each radical before attempting to add or subtract coefficients."}, {"id": "p2-06", "module": "P.2", "topic": "Rationalizing Denominators", "difficulty": "Medium", "questionEn": "Rationalize the denominator: $\\frac{6}{\\sqrt{5} - \\sqrt{2}}$", "questionAr": "أنطق المقام: $\\frac{6}{\\sqrt{5} - \\sqrt{2}}$", "options": ["$2(\\sqrt{5} - \\sqrt{2})$", "$2(\\sqrt{5} + \\sqrt{2})$", "$6(\\sqrt{5} + \\sqrt{2})$", "$\\frac{6\\sqrt{5} + 6\\sqrt{2}}{7}$"], "correctIndex": 1, "hint": "Multiply numerator and denominator by the conjugate: $(\\sqrt{5} + \\sqrt{2})$.", "explanation": "$\\frac{6(\\sqrt{5} + \\sqrt{2})}{(\\sqrt{5} - \\sqrt{2})(\\sqrt{5} + \\sqrt{2})} = \\frac{6(\\sqrt{5} + \\sqrt{2})}{5 - 2} = \\frac{6(\\sqrt{5} + \\sqrt{2})}{3} = 2(\\sqrt{5} + \\sqrt{2})$.", "trapTip": "Conjugate formula: $(a-b)(a+b) = a^2 - b^2$, so $(\\sqrt{5})^2 - (\\sqrt{2})^2 = 5 - 2 = 3$."}, {"id": "p2-07", "module": "P.2", "topic": "Scientific Notation", "difficulty": "Easy", "questionEn": "Express the number $0.0000452$ in scientific notation.", "questionAr": "اكتب العدد $0.0000452$ بالترميز العلمي (Scientific Notation).", "options": ["$4.52 \\times 10^{-4}$", "$45.2 \\times 10^{-6}$", "$4.52 \\times 10^{-5}$", "$4.52 \\times 10^5$"], "correctIndex": 2, "hint": "Move the decimal point to the right until there is one non-zero digit to its left.", "explanation": "Moving the decimal point 5 places to the right yields $4.52$. Since the original number is less than 1, the exponent is negative: $4.52 \\times 10^{-5}$.", "trapTip": "Count the number of places moved carefully: 5 places."}, {"id": "p2-08", "module": "P.2", "topic": "Scientific Notation Operations", "difficulty": "Medium", "questionEn": "Evaluate and write in scientific notation: $\\frac{(1.2 \\times 10^6)(3.0 \\times 10^{-2})}{4.0 \\times 10^{-5}}$", "questionAr": "احسب واكتب بالترميز العلمي: $\\frac{(1.2 \\times 10^6)(3.0 \\times 10^{-2})}{4.0 \\times 10^{-5}}$", "options": ["$9.0 \\times 10^9$", "$0.9 \\times 10^9$", "$9.0 \\times 10^7$", "$9.0 \\times 10^8$"], "correctIndex": 3, "hint": "Group coefficients and powers of 10 separately.", "explanation": "Coefficients: $\\frac{1.2 \\times 3.0}{4.0} = \\frac{3.6}{4.0} = 0.9$.\nPowers of 10: $\\frac{10^6 \\times 10^{-2}}{10^{-5}} = 10^{6 - 2 - (-5)} = 10^9$.\nResult: $0.9 \\times 10^9 = 9.0 \\times 10^8$.", "trapTip": "Remember $0.9 \\times 10^9$ is not in proper scientific notation because $0.9 < 1$; shift decimal to get $9.0 \\times 10^8$."}, {"id": "p2-09", "module": "P.2", "topic": "Rational Exponents", "difficulty": "Medium", "questionEn": "Evaluate: $\\left(\\frac{16}{81}\\right)^{-3/4}$", "questionAr": "احسب قيمة: $\\left(\\frac{16}{81}\\right)^{-3/4}$", "options": ["$\\frac{27}{8}$", "$\\frac{8}{27}$", "$-\\frac{27}{8}$", "$\\frac{81}{16}$"], "correctIndex": 0, "hint": "First invert the base to make the exponent positive: $(81/16)^{3/4}$.", "explanation": "$\\left(\\frac{81}{16}\\right)^{3/4} = \\left(\\frac{\\sqrt[4]{81}}{\\sqrt[4]{16}}\\right)^3 = \\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$.", "trapTip": "Inverting eliminates the negative sign in the exponent."}, {"id": "p2-10", "module": "P.2", "topic": "Radicals Even Index", "difficulty": "Medium", "questionEn": "Simplify: $\\sqrt[4]{x^4}$ for any real number $x$.", "questionAr": "بسّط: $\\sqrt[4]{x^4}$ لأي عدد حقيقي $x$.", "options": ["$x$", "$|x|$", "$-x$", "$\\pm x$"], "correctIndex": 1, "hint": "Recall that $\\sqrt[n]{x^n} = |x|$ when $n$ is even.", "explanation": "Because the 4th root is an even root, the result must be non-negative for all real numbers $x$. Thus, $\\sqrt[4]{x^4} = |x|$.", "trapTip": "Only when $n$ is odd is $\\sqrt[n]{x^n} = x$. For even $n$, absolute value bars are mandatory!"}, {"id": "p2-11", "module": "P.2", "topic": "Radicals Odd Index", "difficulty": "Easy", "questionEn": "Simplify: $\\sqrt[3]{-64x^6 y^9}$", "questionAr": "بسّط: $\\sqrt[3]{-64x^6 y^9}$", "options": ["$4x^2 y^3$", "$-4|x|^2 y^3$", "$-4x^2 y^3$", "$\\text{Not a real number}$"], "correctIndex": 2, "hint": "Odd roots of negative numbers are real and negative: $\\sqrt[3]{-64} = -4$.", "explanation": "$\\sqrt[3]{-64} = -4$, $\\sqrt[3]{x^6} = x^{6/3} = x^2$, $\\sqrt[3]{y^9} = y^{9/3} = y^3$. Result: $-4x^2 y^3$.", "trapTip": "Odd roots do NOT require absolute values, and odd roots of negatives ARE real numbers."}, {"id": "p2-12", "module": "P.2", "topic": "Laws of Exponents", "difficulty": "Medium", "questionEn": "Simplify: $\\frac{(2a^{-1} b^2)^{-3}}{4a^2 b^{-4}}$", "questionAr": "بسّط المقدار التالي: $\\frac{(2a^{-1} b^2)^{-3}}{4a^2 b^{-4}}$", "options": ["$\\frac{a^5}{32b^2}$", "$\\frac{1}{32ab^2}$", "$\\frac{a}{8b^2}$", "$\\frac{a}{32b^2}$"], "correctIndex": 3, "hint": "Distribute the power $-3$ first: $(2)^{-3} (a^{-1})^{-3} (b^2)^{-3} = \\frac{1}{8} a^3 b^{-6}$.", "explanation": "$\\frac{\\frac{1}{8} a^3 b^{-6}}{4 a^2 b^{-4}} = \\frac{1}{32} a^{3 - 2} b^{-6 - (-4)} = \\frac{1}{32} a^1 b^{-2} = \\frac{a}{32 b^2}$.", "trapTip": "$(2)^{-3} = 1/8$, and $(1/8)/4 = 1/32$."}, {"id": "p2-13", "module": "P.2", "topic": "Multiplying Radicals", "difficulty": "Medium", "questionEn": "Multiply and simplify: $(2\\sqrt{3} - \\sqrt{2})(\\sqrt{3} + 4\\sqrt{2})$", "questionAr": "اضرب وبسّط: $(2\\sqrt{3} - \\sqrt{2})(\\sqrt{3} + 4\\sqrt{2})$", "options": ["$-2 + 7\\sqrt{6}$", "$6 - 8$", "$-2 + \\sqrt{6}$", "$14 + 7\\sqrt{6}$"], "correctIndex": 0, "hint": "Use FOIL: First, Outer, Inner, Last.", "explanation": "First: $2\\sqrt{3} \\cdot \\sqrt{3} = 2(3) = 6$.\nOuter: $2\\sqrt{3} \\cdot 4\\sqrt{2} = 8\\sqrt{6}$.\nInner: $-\\sqrt{2} \\cdot \\sqrt{3} = -\\sqrt{6}$.\nLast: $-\\sqrt{2} \\cdot 4\\sqrt{2} = -4(2) = -8$.\nSum: $6 - 8 + (8\\sqrt{6} - \\sqrt{6}) = -2 + 7\\sqrt{6}$.", "trapTip": "Combine like terms: $8\\sqrt{6} - \\sqrt{6} = 7\\sqrt{6}$."}, {"id": "p2-14", "module": "P.2", "topic": "Rationalizing Monomial Denominators", "difficulty": "Medium", "questionEn": "Rationalize the denominator: $\\frac{4}{\\sqrt[3]{2x}}$ (assume $x > 0$).", "questionAr": "أنطق المقام: $\\frac{4}{\\sqrt[3]{2x}}$ (افترض أن $x > 0$).", "options": ["$\\frac{4\\sqrt[3]{2x}}{2x}$", "$\\frac{2\\sqrt[3]{4x^2}}{x}$", "$\\frac{2\\sqrt[3]{2x}}{x}$", "$\\frac{\\sqrt[3]{4x^2}}{x}$"], "correctIndex": 1, "hint": "To eliminate $\\sqrt[3]{2x}$, multiply by $\\sqrt[3]{(2x)^2} = \\sqrt[3]{4x^2}$.", "explanation": "$\\frac{4 \\cdot \\sqrt[3]{4x^2}}{\\sqrt[3]{2x} \\cdot \\sqrt[3]{4x^2}} = \\frac{4\\sqrt[3]{4x^2}}{\\sqrt[3]{8x^3}} = \\frac{4\\sqrt[3]{4x^2}}{2x} = \\frac{2\\sqrt[3]{4x^2}}{x}$.", "trapTip": "For an $n$-th root, you need powers of $n$ inside the radical to clear it: $2 \\cdot 4 = 8 = 2^3$."}, {"id": "p2-15", "module": "P.2", "topic": "Rational Exponents Expressions", "difficulty": "Hard", "questionEn": "Simplify: $\\frac{x^{1/2} - x^{-1/2}}{x^{1/2}}$", "questionAr": "بسّط المقدار: $\\frac{x^{1/2} - x^{-1/2}}{x^{1/2}}$", "options": ["$1 - x$", "$x - 1$", "$1 - \\frac{1}{x}$", "$\\frac{x-1}{x^{1/2}}$"], "correctIndex": 2, "hint": "Split the fraction: $\\frac{x^{1/2}}{x^{1/2}} - \\frac{x^{-1/2}}{x^{1/2}}$.", "explanation": "$\\frac{x^{1/2}}{x^{1/2}} - \\frac{x^{-1/2}}{x^{1/2}} = 1 - x^{-1/2 - 1/2} = 1 - x^{-1} = 1 - \\frac{1}{x} = \\frac{x-1}{x}$.", "trapTip": "$x^{-1/2} / x^{1/2} = x^{-1/2 - 1/2} = x^{-1} = 1/x$."}, {"id": "p2-16", "module": "P.2", "topic": "Zero Exponent", "difficulty": "Easy", "questionEn": "Evaluate: $-5^0 + (-5)^0$", "questionAr": "احسب قيمة المقدار: $-5^0 + (-5)^0$", "options": ["$2$", "$-2$", "$1$", "$0$"], "correctIndex": 3, "hint": "Notice the parentheses: $-5^0 = -(5^0) = -1$, while $(-5)^0 = 1$.", "explanation": "$-5^0 = -(1) = -1$.\n$(-5)^0 = 1$.\nSum: $-1 + 1 = 0$.", "trapTip": "$-5^0$ is NOT equal to $(-5)^0$! Order of operations applies exponent before negation."}, {"id": "p2-17", "module": "P.2", "topic": "Simplifying Radicals", "difficulty": "Medium", "questionEn": "Simplify: $\\sqrt[3]{54} + \\sqrt[3]{16} - \\sqrt[3]{250}$", "questionAr": "بسّط: $\\sqrt[3]{54} + \\sqrt[3]{16} - \\sqrt[3]{250}$", "options": ["$0$", "$\\sqrt[3]{2}$", "$2\\sqrt[3]{2}$", "$-\\sqrt[3]{2}$"], "correctIndex": 0, "hint": "Factor out perfect cubes ($8, 27, 125$): all are multiples of $\\sqrt[3]{2}$.", "explanation": "1) $\\sqrt[3]{54} = \\sqrt[3]{27 \\times 2} = 3\\sqrt[3]{2}$.\n2) $\\sqrt[3]{16} = \\sqrt[3]{8 \\times 2} = 2\\sqrt[3]{2}$.\n3) $\\sqrt[3]{250} = \\sqrt[3]{125 \\times 2} = 5\\sqrt[3]{2}$.\nTotal: $3\\sqrt[3]{2} + 2\\sqrt[3]{2} - 5\\sqrt[3]{2} = 0$.", "trapTip": "All terms reduce to like radicals with $\\sqrt[3]{2}$."}, {"id": "p2-18", "module": "P.2", "topic": "Laws of Exponents", "difficulty": "Hard", "questionEn": "Simplify: $\\left(\\frac{x^{-1} + y^{-1}}{x^{-2} - y^{-2}}\\right)$", "questionAr": "بسّط التعبير: $\\left(\\frac{x^{-1} + y^{-1}}{x^{-2} - y^{-2}}\\right)$", "options": ["$\\frac{xy}{x - y}$", "$\\frac{xy}{y - x}$", "$\\frac{1}{x - y}$", "$\\frac{1}{y - x}$"], "correctIndex": 1, "hint": "Rewrite using fractions: $x^{-1} + y^{-1} = \\frac{1}{x} + \\frac{1}{y} = \\frac{y+x}{xy}$.", "explanation": "Denominator: $x^{-2} - y^{-2} = \\frac{1}{x^2} - \\frac{1}{y^2} = \\frac{y^2 - x^2}{x^2 y^2} = \\frac{(y-x)(y+x)}{x^2 y^2}$.\nDividing: $\\frac{y+x}{xy} \\cdot \\frac{x^2 y^2}{(y-x)(y+x)} = \\frac{xy}{y-x}$.", "trapTip": "$(y^2 - x^2) = (y-x)(y+x)$, NOT $(x-y)(x+y)$!"}, {"id": "p2-19", "module": "P.2", "topic": "Rationalizing Numerator", "difficulty": "Hard", "questionEn": "Rationalize the numerator: $\\frac{\\sqrt{x+h} - \\sqrt{x}}{h}$", "questionAr": "أنطق البسط: $\\frac{\\sqrt{x+h} - \\sqrt{x}}{h}$", "options": ["$\\frac{h}{\\sqrt{x+h} + \\sqrt{x}}$", "$\\frac{1}{\\sqrt{x+h} - \\sqrt{x}}$", "$\\frac{1}{\\sqrt{x+h} + \\sqrt{x}}$", "$\\frac{\\sqrt{h}}{h}$"], "correctIndex": 2, "hint": "Multiply numerator and denominator by conjugate $(\\sqrt{x+h} + \\sqrt{x})$.", "explanation": "Numerator: $(\\sqrt{x+h} - \\sqrt{x})(\\sqrt{x+h} + \\sqrt{x}) = (x+h) - x = h$.\nDividing by $h(\\sqrt{x+h} + \\sqrt{x})$ cancels $h$, giving $\\frac{1}{\\sqrt{x+h} + \\sqrt{x}}$.", "trapTip": "This is the foundational difference quotient simplification for calculus!"}, {"id": "p2-20", "module": "P.2", "topic": "Rational Exponents", "difficulty": "Medium", "questionEn": "Write in simplest radical form: $(x^2 y^3)^{1/6}$ (for $x, y > 0$).", "questionAr": "اكتب في أبسط صورة جذرية: $(x^2 y^3)^{1/6}$ (حيث $x, y > 0$).", "options": ["$\\sqrt[6]{x^2 y^3}$", "$\\sqrt[3]{x}\\sqrt{y}$", "$x^{1/3} y^{1/2}$", "$\\sqrt[6]{x^2 y^3} = \\sqrt{y}\\sqrt[3]{x}$"], "correctIndex": 3, "hint": "Distribute the exponent $1/6$: $x^{2/6} y^{3/6} = x^{1/3} y^{1/2} = \\sqrt[3]{x}\\sqrt{y}$.", "explanation": "In radical form: $x^{1/3} y^{1/2} = \\sqrt[3]{x} \\sqrt{y}$ (or $\\sqrt[6]{x^2 y^3}$).", "trapTip": "Reduce fractions in the exponents: $2/6 = 1/3$ and $3/6 = 1/2$."}, {"id": "p2-21", "module": "P.2", "topic": "Radical Division", "difficulty": "Easy", "questionEn": "Simplify: $\\frac{\\sqrt{98x^5}}{\\sqrt{2x}}$ (for $x > 0$).", "questionAr": "بسّط المقدار: $\\frac{\\sqrt{98x^5}}{\\sqrt{2x}}$ (حيث $x > 0$).", "options": ["$7x^2$", "$14x^2$", "$7x^4$", "$49x^2$"], "correctIndex": 0, "hint": "Use quotient rule: $\\frac{\\sqrt{A}}{\\sqrt{B}} = \\sqrt{\\frac{A}{B}}$.", "explanation": "$\\sqrt{\\frac{98x^5}{2x}} = \\sqrt{49x^4} = 7x^2$.", "trapTip": "Divide under the radical first to make simplification straightforward."}, {"id": "p2-22", "module": "P.2", "topic": "Negative Exponents", "difficulty": "Easy", "questionEn": "Which of the following is equivalent to $\\frac{1}{2^{-3}}$?", "questionAr": "أي من المقادير التالية يكافئ $\\frac{1}{2^{-3}}$؟", "options": ["$-8$", "$8$", "$\\frac{1}{8}$", "$-\\frac{1}{8}$"], "correctIndex": 1, "hint": "Recall $\\frac{1}{a^{-n}} = a^n$.", "explanation": "$\\frac{1}{2^{-3}} = 2^3 = 8$.", "trapTip": "A negative exponent in the denominator becomes positive in the numerator."}, {"id": "p2-23", "module": "P.2", "topic": "Powers of Radicals", "difficulty": "Medium", "questionEn": "Evaluate: $(\\sqrt[3]{-8})^4$", "questionAr": "احسب قيمة: $(\\sqrt[3]{-8})^4$", "options": ["$-16$", "$64$", "$16$", "$-64$"], "correctIndex": 2, "hint": "Find the cube root first, then raise to the 4th power.", "explanation": "$\\sqrt[3]{-8} = -2$, and $(-2)^4 = 16$.", "trapTip": "Raising a negative number to an even power yields a positive result."}, {"id": "p2-24", "module": "P.2", "topic": "Rationalizing Binomial Denominators", "difficulty": "Hard", "questionEn": "Simplify: $\\frac{1}{2 + \\sqrt{3}} + \\frac{1}{2 - \\sqrt{3}}$", "questionAr": "بسّط المقدار: $\\frac{1}{2 + \\sqrt{3}} + \\frac{1}{2 - \\sqrt{3}}$", "options": ["$2\\sqrt{3}$", "$4 + 2\\sqrt{3}$", "$1$", "$4$"], "correctIndex": 3, "hint": "Combine the fractions by finding a common denominator, which is a product of conjugates.", "explanation": "Common denominator: $(2 + \\sqrt{3})(2 - \\sqrt{3}) = 4 - 3 = 1$.\nNumerator: $(2 - \\sqrt{3}) + (2 + \\sqrt{3}) = 4$.\nResult: $4/1 = 4$.", "trapTip": "The radical terms cancel out completely in the numerator!"}, {"id": "p2-25", "module": "P.2", "topic": "Laws of Exponents", "difficulty": "Medium", "questionEn": "If $2^{x+1} = 32$, what is the value of $x$?", "questionAr": "إذا كان $2^{x+1} = 32$ ، فما قيمة $x$؟", "options": ["$4$", "$5$", "$3$", "$6$"], "correctIndex": 0, "hint": "Express 32 as a power of 2: $32 = 2^5$.", "explanation": "$2^{x+1} = 2^5 \\implies x + 1 = 5 \\implies x = 4$.", "trapTip": "Do not forget to subtract 1 from the exponent 5."}, {"id": "p2-26", "module": "P.2", "topic": "Radicals Even vs Odd", "difficulty": "Medium", "questionEn": "Evaluate: $\\sqrt{(-5)^2} - \\sqrt[3]{(-5)^3}$", "questionAr": "احسب قيمة: $\\sqrt{(-5)^2} - \\sqrt[3]{(-5)^3}$", "options": ["$0$", "$10$", "$-10$", "$5$"], "correctIndex": 1, "hint": "For even roots: $\\sqrt{a^2} = |a|$. For odd roots: $\\sqrt[3]{a^3} = a$.", "explanation": "$\\sqrt{(-5)^2} = |-5| = 5$.\n$\\sqrt[3]{(-5)^3} = -5$.\nResult: $5 - (-5) = 5 + 5 = 10$.", "trapTip": "$\\sqrt{(-5)^2} = 5$, not $-5$! The principal square root is never negative."}, {"id": "p2-27", "module": "P.2", "topic": "Radicals Product", "difficulty": "Easy", "questionEn": "Simplify: $\\sqrt{18} \\cdot \\sqrt{2}$", "questionAr": "بسّط المقدار: $\\sqrt{18} \\cdot \\sqrt{2}$", "options": ["$12$", "$36$", "$6$", "$3\\sqrt{2}$"], "correctIndex": 2, "hint": "Multiply radicands: $\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$.", "explanation": "$\\sqrt{18} \\cdot \\sqrt{2} = \\sqrt{36} = 6$.", "trapTip": "Combining under one root makes it a perfect square immediately."}, {"id": "p2-28", "module": "P.2", "topic": "Scientific Notation Division", "difficulty": "Medium", "questionEn": "Compute $\\frac{6.4 \\times 10^{-3}}{1.6 \\times 10^{-7}}$ and express in scientific notation.", "questionAr": "احسب $\\frac{6.4 \\times 10^{-3}}{1.6 \\times 10^{-7}}$ واكتب الناتج بالترميز العلمي.", "options": ["$4.0 \\times 10^{-10}$", "$4.0 \\times 10^{-4}$", "$4.8 \\times 10^4$", "$4.0 \\times 10^4$"], "correctIndex": 3, "hint": "Divide coefficients and subtract exponents: $-3 - (-7) = +4$.", "explanation": "$\\frac{6.4}{1.6} = 4.0$. Exponent: $-3 - (-7) = 4$. Result: $4.0 \\times 10^4$.", "trapTip": "$-3 - (-7) = -3 + 7 = 4$, not $-10$."}, {"id": "p2-29", "module": "P.2", "topic": "Laws of Exponents", "difficulty": "Medium", "questionEn": "Simplify: $\\frac{x^n \\cdot x^{2n+1}}{x^{3n-2}}$", "questionAr": "بسّط المقدار: $\\frac{x^n \\cdot x^{2n+1}}{x^{3n-2}}$", "options": ["$x^3$", "$x^{-1}$", "$x^1$", "$x^{6n-1}$"], "correctIndex": 0, "hint": "Numerator: $x^{n + 2n + 1} = x^{3n + 1}$. Now subtract denominator exponent.", "explanation": "$x^{(3n+1) - (3n-2)} = x^{3n + 1 - 3n + 2} = x^3$.", "trapTip": "Be sure to distribute the minus sign when subtracting the denominator exponent: $-(3n-2) = -3n + 2$."}, {"id": "p2-30", "module": "P.2", "topic": "Rationalizing Binomial Denominators", "difficulty": "Hard", "questionEn": "Rationalize: $\\frac{\\sqrt{3}}{\\sqrt{3} + 1}$", "questionAr": "أنطق المقام: $\\frac{\\sqrt{3}}{\\sqrt{3} + 1}$", "options": ["$\\frac{3 + \\sqrt{3}}{2}$", "$\\frac{3 - \\sqrt{3}}{2}$", "$\\frac{\\sqrt{3}-3}{2}$", "$3 - \\sqrt{3}$"], "correctIndex": 1, "hint": "Multiply by conjugate $(\\sqrt{3} - 1)$.", "explanation": "Numerator: $\\sqrt{3}(\\sqrt{3} - 1) = 3 - \\sqrt{3}$.\nDenominator: $(\\sqrt{3}+1)(\\sqrt{3}-1) = 3 - 1 = 2$.\nResult: $\\frac{3-\\sqrt{3}}{2}$.", "trapTip": "Denominator is $(\\sqrt{3})^2 - 1^2 = 2$."}, {"id": "p2-31", "module": "P.2", "topic": "Rational Exponents", "difficulty": "Medium", "questionEn": "Simplify: $(64)^{-2/3}$", "questionAr": "احسب قيمة: $(64)^{-2/3}$", "options": ["$16$", "$-\\frac{1}{16}$", "$\\frac{1}{16}$", "$-16$"], "correctIndex": 2, "hint": "Negative exponent means reciprocal: $\\frac{1}{64^{2/3}}$.", "explanation": "$64^{1/3} = 4 \\implies 4^2 = 16$. Thus $\\frac{1}{16}$.", "trapTip": "Negative power makes the fraction $1/16$, not $-16$."}, {"id": "p2-32", "module": "P.2", "topic": "Radicals Nested", "difficulty": "Hard", "questionEn": "Simplify: $\\sqrt{\\sqrt[3]{x}}$ for $x \\ge 0$.", "questionAr": "بسّط المقدار: $\\sqrt{\\sqrt[3]{x}}$ (حيث $x \\ge 0$).", "options": ["$\\sqrt[5]{x}$", "$x^{2/3}$", "$x^{3/2}$", "$\\sqrt[6]{x}$"], "correctIndex": 3, "hint": "Convert to fractional exponents: $(x^{1/3})^{1/2}$.", "explanation": "$(x^{1/3})^{1/2} = x^{(1/3)(1/2)} = x^{1/6} = \\sqrt[6]{x}$.", "trapTip": "Multiply the indices of nested roots: $2 \\times 3 = 6$, do not add them!"}, {"id": "p2-33", "module": "P.2", "topic": "Simplifying Radicals", "difficulty": "Medium", "questionEn": "Simplify: $\\sqrt[3]{81 x^5 y^6}$", "questionAr": "بسّط المقدار: $\\sqrt[3]{81 x^5 y^6}$", "options": ["$3xy^2 \\sqrt[3]{3x^2}$", "$3x^2 y^2 \\sqrt[3]{3x}$", "$9xy^2 \\sqrt[3]{x^2}$", "$3xy^2 \\sqrt[3]{9x^2}$"], "correctIndex": 0, "hint": "Extract powers of 3: $81 = 27 \\times 3 = 3^3 \\times 3$, $x^5 = x^3 \\cdot x^2$, $y^6 = (y^2)^3$.", "explanation": "$\\sqrt[3]{27 \\cdot 3 \\cdot x^3 \\cdot x^2 \\cdot (y^2)^3} = 3 x y^2 \\sqrt[3]{3x^2}$.", "trapTip": "Make sure the remaining terms under the cube root are $3x^2$."}, {"id": "p2-34", "module": "P.2", "topic": "Laws of Exponents", "difficulty": "Easy", "questionEn": "Simplify: $\\frac{5^8}{5^5}$", "questionAr": "احسب قيمة: $\\frac{5^8}{5^5}$", "options": ["$25$", "$125$", "$5$", "$625$"], "correctIndex": 1, "hint": "Subtract exponents: $5^{8 - 5} = 5^3$.", "explanation": "$5^{8-5} = 5^3 = 125$.", "trapTip": "Quotient rule: $a^m / a^n = a^{m-n}$."}, {"id": "p2-35", "module": "P.2", "topic": "Combining Radicals", "difficulty": "Medium", "questionEn": "Simplify: $2\\sqrt{45} - 3\\sqrt{20}$", "questionAr": "بسّط المقدار: $2\\sqrt{45} - 3\\sqrt{20}$", "options": ["$-\\sqrt{5}$", "$\\sqrt{5}$", "$0$", "$6\\sqrt{5}$"], "correctIndex": 2, "hint": "Reduce to $\\sqrt{5}$: $\\sqrt{45} = 3\\sqrt{5}$ and $\\sqrt{20} = 2\\sqrt{5}$.", "explanation": "$2(3\\sqrt{5}) - 3(2\\sqrt{5}) = 6\\sqrt{5} - 6\\sqrt{5} = 0$.", "trapTip": "Both coefficients equal 6, so they cancel out completely."}, {"id": "p2-36", "module": "P.2", "topic": "Scientific Notation", "difficulty": "Easy", "questionEn": "Convert $7.85 \\times 10^5$ to standard decimal notation.", "questionAr": "حوّل العدد $7.85 \\times 10^5$ إلى الصيغة القياسية العشرية.", "options": ["$78500$", "$7850000$", "$0.0000785$", "$785000$"], "correctIndex": 3, "hint": "Shift the decimal point 5 places to the right.", "explanation": "Moving decimal 5 places right gives $785,000$.", "trapTip": "Count decimal places starting after the 7."}, {"id": "p2-37", "module": "P.2", "topic": "Radicals Conjugate Multiplication", "difficulty": "Easy", "questionEn": "Multiply: $(3 - \\sqrt{7})(3 + \\sqrt{7})$", "questionAr": "اضرب المقدارين: $(3 - \\sqrt{7})(3 + \\sqrt{7})$", "options": ["$2$", "$16$", "$9 - \\sqrt{7}$", "$-2$"], "correctIndex": 0, "hint": "Difference of squares: $(a - b)(a + b) = a^2 - b^2$.", "explanation": "$3^2 - (\\sqrt{7})^2 = 9 - 7 = 2$.", "trapTip": "The product of conjugates is always rational!"}, {"id": "p2-38", "module": "P.2", "topic": "Rational Exponents Product", "difficulty": "Medium", "questionEn": "Simplify: $x^{2/3} \\cdot x^{1/4}$", "questionAr": "بسّط المقدار: $x^{2/3} \\cdot x^{1/4}$", "options": ["$x^{2/12}$", "$x^{11/12}$", "$x^{3/7}$", "$x^{8/12}$"], "correctIndex": 1, "hint": "Add the fractional exponents: $\\frac{2}{3} + \\frac{1}{4}$.", "explanation": "Common denominator is 12: $\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$. Result: $x^{11/12}$.", "trapTip": "Find common denominator when adding fractions in exponents."}, {"id": "p2-39", "module": "P.2", "topic": "Rational Exponents Power", "difficulty": "Easy", "questionEn": "Simplify: $(x^{3/4})^8$", "questionAr": "بسّط المقدار: $(x^{3/4})^8$", "options": ["$x^{24/32}$", "$x^{11/4}$", "$x^6$", "$x^2$"], "correctIndex": 2, "hint": "Multiply exponents: $\\frac{3}{4} \\times 8$.", "explanation": "$\\frac{3}{4} \\times 8 = \\frac{24}{4} = 6$. Result: $x^6$.", "trapTip": "Power of a power multiplies exponents."}, {"id": "p2-40", "module": "P.2", "topic": "Negative Exponents Addition", "difficulty": "Hard", "questionEn": "Simplify: $\\frac{a^{-1} + b^{-1}}{(ab)^{-1}}$", "questionAr": "بسّط المقدار: $\\frac{a^{-1} + b^{-1}}{(ab)^{-1}}$", "options": ["$ab$", "$\\frac{1}{a+b}$", "$\\frac{a+b}{ab}$", "$a + b$"], "correctIndex": 3, "hint": "Rewrite: $a^{-1} + b^{-1} = \\frac{a+b}{ab}$. Denominator is $(ab)^{-1} = \\frac{1}{ab}$.", "explanation": "$\\frac{\\frac{a+b}{ab}}{\\frac{1}{ab}} = \\frac{a+b}{ab} \\cdot \\frac{ab}{1} = a + b$.", "trapTip": "The denominator $ab$ cancels out cleanly."}, {"id": "p3-01", "module": "P.3", "topic": "Polynomial Degree", "difficulty": "Easy", "questionEn": "Find the degree and leading coefficient of the polynomial: $P(x) = 5x^3 - 7x^6 + 2x - 9$", "questionAr": "أوجد درجة المعامل الرئيسي لكثير الحدود: $P(x) = 5x^3 - 7x^6 + 2x - 9$", "options": ["$\\text{Degree } 6, \\text{ Leading Coefficient } -7$", "$\\text{Degree } 3, \\text{ Leading Coefficient } 5$", "$\\text{Degree } 6, \\text{ Leading Coefficient } 7$", "$\\text{Degree } 10, \\text{ Leading Coefficient } -7$"], "correctIndex": 0, "hint": "The degree is the highest exponent of the variable, and the leading coefficient is the coefficient of that term.", "explanation": "The highest power is $x^6$, so the degree is $6$. Its coefficient includes the sign: $-7$.", "trapTip": "The leading term is not always the first term written; always look for the highest exponent!"}, {"id": "p3-02", "module": "P.3", "topic": "Polynomial Addition", "difficulty": "Easy", "questionEn": "Add the polynomials: $(3x^2 - 5x + 7) + (2x^2 + 8x - 12)$", "questionAr": "اجمع كثيرتي الحدود: $(3x^2 - 5x + 7) + (2x^2 + 8x - 12)$", "options": ["$5x^2 - 3x - 5$", "$5x^2 + 3x - 5$", "$5x^2 + 3x + 5$", "$6x^2 + 3x - 5$"], "correctIndex": 1, "hint": "Group and combine like terms.", "explanation": "$(3+2)x^2 + (-5+8)x + (7-12) = 5x^2 + 3x - 5$.", "trapTip": "Pay attention to the signs: $-5 + 8 = +3$, and $7 - 12 = -5$."}, {"id": "p3-03", "module": "P.3", "topic": "Polynomial Subtraction", "difficulty": "Medium", "questionEn": "Subtract: $(4x^3 - 2x^2 + 5) - (2x^3 - 7x^2 + 3x - 8)$", "questionAr": "اطرح كثيرتي الحدود: $(4x^3 - 2x^2 + 5) - (2x^3 - 7x^2 + 3x - 8)$", "options": ["$2x^3 - 9x^2 - 3x + 13$", "$2x^3 + 5x^2 + 3x - 3$", "$2x^3 + 5x^2 - 3x + 13$", "$2x^3 - 9x^2 + 3x - 3$"], "correctIndex": 2, "hint": "Distribute the negative sign to all terms in the second polynomial before combining.", "explanation": "$(4x^3 - 2x^2 + 5) - 2x^3 + 7x^2 - 3x + 8 = (4-2)x^3 + (-2+7)x^2 - 3x + (5+8) = 2x^3 + 5x^2 - 3x + 13$.", "trapTip": "Minus a negative becomes plus: $-(-7x^2) = +7x^2$ and $-(-8) = +8$."}, {"id": "p3-04", "module": "P.3", "topic": "Special Products", "difficulty": "Easy", "questionEn": "Expand: $(3x - 4)^2$", "questionAr": "فك المقدار: $(3x - 4)^2$", "options": ["$9x^2 - 16$", "$9x^2 + 16$", "$9x^2 - 12x + 16$", "$9x^2 - 24x + 16$"], "correctIndex": 3, "hint": "Use $(A - B)^2 = A^2 - 2AB + B^2$.", "explanation": "$(3x)^2 - 2(3x)(4) + 4^2 = 9x^2 - 24x + 16$.", "trapTip": "Never forget the middle term $-2AB = -2(3x)(4) = -24x$!"}, {"id": "p3-05", "module": "P.3", "topic": "Special Products", "difficulty": "Easy", "questionEn": "Expand: $(2x + 5)(2x - 5)$", "questionAr": "فك المقدار: $(2x + 5)(2x - 5)$", "options": ["$4x^2 - 25$", "$4x^2 - 20x - 25$", "$4x^2 + 25$", "$2x^2 - 25$"], "correctIndex": 0, "hint": "Use difference of squares: $(A + B)(A - B) = A^2 - B^2$.", "explanation": "$(2x)^2 - 5^2 = 4x^2 - 25$.", "trapTip": "The inner and outer terms cancel each other out: $+10x - 10x = 0$."}, {"id": "p3-06", "module": "P.3", "topic": "Special Products", "difficulty": "Medium", "questionEn": "Expand the cube of a binomial: $(x - 2)^3$", "questionAr": "فك مكعب ذي الحدين: $(x - 2)^3$", "options": ["$x^3 - 8$", "$x^3 - 6x^2 + 12x - 8$", "$x^3 - 6x^2 - 12x - 8$", "$x^3 - 2x^2 + 4x - 8$"], "correctIndex": 1, "hint": "Use $(A - B)^3 = A^3 - 3A^2 B + 3A B^2 - B^3$.", "explanation": "$x^3 - 3(x^2)(2) + 3(x)(2^2) - 2^3 = x^3 - 6x^2 + 12x - 8$.", "trapTip": "Signs alternate: $+ - + -$ for $(A-B)^3$."}, {"id": "p3-07", "module": "P.3", "topic": "Special Products", "difficulty": "Medium", "questionEn": "Expand the cube of a sum: $(2x + 1)^3$", "questionAr": "فك مكعب ذي الحدين: $(2x + 1)^3$", "options": ["$8x^3 + 1$", "$6x^3 + 12x^2 + 6x + 1$", "$8x^3 + 12x^2 + 6x + 1$", "$8x^3 + 6x^2 + 6x + 1$"], "correctIndex": 2, "hint": "Use $(A + B)^3 = A^3 + 3A^2 B + 3A B^2 + B^3$.", "explanation": "$(2x)^3 + 3(2x)^2(1) + 3(2x)(1^2) + 1^3 = 8x^3 + 3(4x^2) + 6x + 1 = 8x^3 + 12x^2 + 6x + 1$.", "trapTip": "Cube the coefficient $2$: $(2x)^3 = 8x^3$, not $6x^3$!"}, {"id": "p3-08", "module": "P.3", "topic": "Polynomial Multiplication", "difficulty": "Medium", "questionEn": "Multiply: $(2x - 3)(x^2 + 4x - 5)$", "questionAr": "اضرب المقدارين: $(2x - 3)(x^2 + 4x - 5)$", "options": ["$2x^3 + 8x^2 - 22x + 15$", "$2x^3 + 5x^2 + 2x + 15$", "$2x^3 - 3x^2 - 22x + 15$", "$2x^3 + 5x^2 - 22x + 15$"], "correctIndex": 3, "hint": "Distribute $2x$ and then $-3$ across the trinomial.", "explanation": "$2x(x^2 + 4x - 5) - 3(x^2 + 4x - 5) = (2x^3 + 8x^2 - 10x) + (-3x^2 - 12x + 15) = 2x^3 + 5x^2 - 22x + 15$.", "trapTip": "Combine like terms carefully: $8x^2 - 3x^2 = 5x^2$ and $-10x - 12x = -22x$."}, {"id": "p3-09", "module": "P.3", "topic": "Multivariable Polynomial Degree", "difficulty": "Medium", "questionEn": "Find the degree of the multivariable polynomial: $7x^2 y^4 - 3x^5 y^2 + 8xy^3 - 12$", "questionAr": "أوجد درجة كثير الحدود متعدد المتغيرات: $7x^2 y^4 - 3x^5 y^2 + 8xy^3 - 12$", "options": ["$7$", "$6$", "$5$", "$8$"], "correctIndex": 0, "hint": "The degree of a term is the sum of exponents of its variables. The polynomial's degree is the maximum term degree.", "explanation": "Term degrees: $x^2 y^4 \\implies 2+4=6$; $x^5 y^2 \\implies 5+2=7$; $xy^3 \\implies 1+3=4$. Maximum is $7$.", "trapTip": "Sum the exponents in each term separately and pick the highest sum."}, {"id": "p3-10", "module": "P.3", "topic": "Classification of Polynomials", "difficulty": "Easy", "questionEn": "Which of the following is NOT a polynomial?", "questionAr": "أي من المقادير التالية لا يُعد كثير حدود (Not a polynomial)؟", "options": ["$5x^4 - 2x^2 + 7$", "$\\frac{3}{x^2} + 5x - 1$", "$\\sqrt{3}x^2 + \\frac{1}{2}x$", "$9$"], "correctIndex": 1, "hint": "Polynomials must have non-negative integer exponents for all variables.", "explanation": "$\\frac{3}{x^2} = 3x^{-2}$, which has a negative exponent. Therefore, it is not a polynomial.", "trapTip": "A radical or fraction on the COEFFICIENT is fine (e.g. $\\sqrt{3}$), but not on the variable!"}, {"id": "p3-11", "module": "P.3", "topic": "Special Products", "difficulty": "Medium", "questionEn": "Multiply: $(x + y - 2)(x + y + 2)$", "questionAr": "اضرب المقدارين: $(x + y - 2)(x + y + 2)$", "options": ["$x^2 + y^2 - 4$", "$x^2 + 2xy + y^2 + 4$", "$x^2 + 2xy + y^2 - 4$", "$x^2 - 2xy + y^2 - 4$"], "correctIndex": 2, "hint": "Treat $(x + y)$ as a single group $A$: $(A - 2)(A + 2) = A^2 - 4$.", "explanation": "$(x + y)^2 - 2^2 = (x^2 + 2xy + y^2) - 4 = x^2 + 2xy + y^2 - 4$.", "trapTip": "Do not forget the cross term $2xy$ when squaring $(x+y)$!"}, {"id": "p3-12", "module": "P.3", "topic": "Polynomial Multiplication", "difficulty": "Medium", "questionEn": "Multiply: $(3x^2 - 2)(2x^2 + 5)$", "questionAr": "اضرب المقدارين: $(3x^2 - 2)(2x^2 + 5)$", "options": ["$6x^4 - 10$", "$6x^4 - 11x^2 - 10$", "$5x^4 + 11x^2 - 10$", "$6x^4 + 11x^2 - 10$"], "correctIndex": 3, "hint": "Use FOIL on the powers of $x^2$.", "explanation": "First: $3x^2 \\cdot 2x^2 = 6x^4$. Outer: $3x^2 \\cdot 5 = 15x^2$. Inner: $-2 \\cdot 2x^2 = -4x^2$. Last: $-2 \\cdot 5 = -10$. Combined: $6x^4 + 11x^2 - 10$.", "trapTip": "$x^2 \\cdot x^2 = x^4$, not $x^2$."}, {"id": "p3-13", "module": "P.3", "topic": "Coefficient Identification", "difficulty": "Easy", "questionEn": "What is the coefficient of $x^2$ in the expansion of $(2x - 3)(x^2 - 4x + 1)$?", "questionAr": "ما هو معامل $x^2$ في مفكوك المقدار $(2x - 3)(x^2 - 4x + 1)$؟", "options": ["$-11$", "$-8$", "$-3$", "$5$"], "correctIndex": 0, "hint": "Identify only the products that result in an $x^2$ term.", "explanation": "$2x(-4x) = -8x^2$ and $-3(x^2) = -3x^2$. Sum of coefficients: $-8 + (-3) = -11$.", "trapTip": "You do not need to expand the entire polynomial to find one specific coefficient."}, {"id": "p3-14", "module": "P.3", "topic": "Special Products", "difficulty": "Medium", "questionEn": "Simplify: $(x + 3)^2 - (x - 3)^2$", "questionAr": "بسّط المقدار: $(x + 3)^2 - (x - 3)^2$", "options": ["$18$", "$12x$", "$2x^2 + 18$", "$0$"], "correctIndex": 1, "hint": "Expand each square or use difference of squares.", "explanation": "$(x^2 + 6x + 9) - (x^2 - 6x + 9) = x^2 + 6x + 9 - x^2 + 6x - 9 = 12x$.", "trapTip": "The $x^2$ and constant terms cancel, while $6x - (-6x) = 12x$."}, {"id": "p3-15", "module": "P.3", "topic": "Leading Term", "difficulty": "Easy", "questionEn": "What is the leading term of the polynomial $f(x) = (3x^2 - 1)(2x^3 + 5)$?", "questionAr": "ما هو الحد الرئيسي (Leading Term) لكثير الحدود $f(x) = (3x^2 - 1)(2x^3 + 5)$؟", "options": ["$6x^6$", "$3x^5$", "$6x^5$", "$15x^2$"], "correctIndex": 2, "hint": "Multiply the highest degree terms of each factor: $(3x^2)(2x^3)$.", "explanation": "$(3x^2)(2x^3) = 6x^{2+3} = 6x^5$.", "trapTip": "Add the exponents: $2 + 3 = 5$, do not multiply them!"}, {"id": "p3-16", "module": "P.3", "topic": "Constant Term", "difficulty": "Easy", "questionEn": "What is the constant term of the polynomial $P(x) = (2x - 3)^3$?", "questionAr": "ما هو الحد الثابت في مفكوك كثير الحدود $P(x) = (2x - 3)^3$؟", "options": ["$27$", "$-9$", "$-1$", "$-27$"], "correctIndex": 3, "hint": "The constant term is found by evaluating $P(0)$ or cubing the constant $-3$.", "explanation": "$P(0) = (2(0) - 3)^3 = (-3)^3 = -27$.", "trapTip": "$(-3)^3 = -27$, a negative number."}, {"id": "p3-17", "module": "P.3", "topic": "Polynomial Division Concept", "difficulty": "Medium", "questionEn": "Divide the polynomial by the monomial: $\\frac{12x^5 - 8x^3 + 4x^2}{4x^2}$", "questionAr": "اقسم كثير الحدود على وحيد الحد: $\\frac{12x^5 - 8x^3 + 4x^2}{4x^2}$", "options": ["$3x^3 - 2x + 1$", "$3x^3 - 2x$", "$3x^3 - 2x^2 + 1$", "$3x^5 - 2x^3 + 1$"], "correctIndex": 0, "hint": "Divide each term of the numerator individually by $4x^2$.", "explanation": "$\\frac{12x^5}{4x^2} - \\frac{8x^3}{4x^2} + \\frac{4x^2}{4x^2} = 3x^3 - 2x + 1$.", "trapTip": "Don't forget the last term: $\\frac{4x^2}{4x^2} = 1$, not 0!"}, {"id": "p3-18", "module": "P.3", "topic": "Special Products", "difficulty": "Hard", "questionEn": "Expand: $(x^2 - 2y)^2$", "questionAr": "فك المقدار: $(x^2 - 2y)^2$", "options": ["$x^4 - 4y^2$", "$x^4 - 4x^2 y + 4y^2$", "$x^4 + 4y^2$", "$x^4 - 2x^2 y + 4y^2$"], "correctIndex": 1, "hint": "$(A - B)^2 = A^2 - 2AB + B^2$ with $A = x^2$ and $B = 2y$.", "explanation": "$(x^2)^2 - 2(x^2)(2y) + (2y)^2 = x^4 - 4x^2 y + 4y^2$.", "trapTip": "Square both the coefficient and the variable in $(2y)^2 = 4y^2$."}, {"id": "p3-19", "module": "P.3", "topic": "Polynomial Operations", "difficulty": "Medium", "questionEn": "Simplify: $2x(3x - 1) - 4(x^2 - 2x + 3)$", "questionAr": "بسّط المقدار: $2x(3x - 1) - 4(x^2 - 2x + 3)$", "options": ["$2x^2 - 10x - 12$", "$6x^2 + 6x - 12$", "$2x^2 + 6x - 12$", "$2x^2 + 6x + 12$"], "correctIndex": 2, "hint": "Distribute carefully and combine like terms.", "explanation": "$(6x^2 - 2x) - (4x^2 - 8x + 12) = 6x^2 - 2x - 4x^2 + 8x - 12 = 2x^2 + 6x - 12$.", "trapTip": "Distribute the negative sign to $-8x$ so it becomes $+8x$."}, {"id": "p3-20", "module": "P.3", "topic": "Product of Three Binomials", "difficulty": "Hard", "questionEn": "Multiply: $(x - 1)(x + 2)(x - 3)$", "questionAr": "اضرب المقادير الثلاثة: $(x - 1)(x + 2)(x - 3)$", "options": ["$x^3 + 2x^2 - 5x - 6$", "$x^3 - 2x^2 + 5x - 6$", "$x^3 - 5x^2 - 2x + 6$", "$x^3 - 2x^2 - 5x + 6$"], "correctIndex": 3, "hint": "Multiply two binomials first, then multiply the resulting trinomial by the third.", "explanation": "1) $(x - 1)(x + 2) = x^2 + x - 2$.\n2) $(x^2 + x - 2)(x - 3) = x(x^2 + x - 2) - 3(x^2 + x - 2) = x^3 + x^2 - 2x - 3x^2 - 3x + 6 = x^3 - 2x^2 - 5x + 6$.", "trapTip": "Keep terms organized when distributing the trinomial."}, {"id": "p3-21", "module": "P.3", "topic": "Polynomial Degree Zero", "difficulty": "Easy", "questionEn": "What is the degree of the non-zero constant polynomial $P(x) = -17$?", "questionAr": "ما هي درجة كثير الحدود الثابت غير الصفري $P(x) = -17$؟", "options": ["$0$", "$1$", "$-17$", "$\\text{Undefined}$"], "correctIndex": 0, "hint": "A non-zero constant can be written as $c \\cdot x^0$.", "explanation": "Since $-17 = -17x^0$, the degree is 0. (The zero polynomial $P(x)=0$ has undefined degree).", "trapTip": "Do not confuse the value of the constant with its degree ($0$)."}, {"id": "p3-22", "module": "P.3", "topic": "Standard Form", "difficulty": "Easy", "questionEn": "Which polynomial is written in standard form?", "questionAr": "أي من كثيرات الحدود التالية مكتوبة بالصيغة القياسية (Standard Form)؟", "options": ["$-5 + 2x - 3x^3 + 7x^4$", "$7x^4 - 3x^3 + 2x - 5$", "$2x + 7x^4 - 5 - 3x^3$", "$7x^4 + 2x - 3x^3 - 5$"], "correctIndex": 1, "hint": "Standard form requires terms to be ordered from highest degree to lowest degree.", "explanation": "Powers are strictly descending: $4, 3, 1, 0$. Thus $7x^4 - 3x^3 + 2x - 5$ is in standard form.", "trapTip": "Standard form always has descending powers."}, {"id": "p3-23", "module": "P.3", "topic": "Special Products", "difficulty": "Medium", "questionEn": "Find the product: $(3a - 2b)(3a + 2b)$", "questionAr": "أوجد ناتج الضرب: $(3a - 2b)(3a + 2b)$", "options": ["$9a^2 + 4b^2$", "$9a^2 - 12ab - 4b^2$", "$9a^2 - 4b^2$", "$6a^2 - 4b^2$"], "correctIndex": 2, "hint": "Difference of squares: $(A - B)(A + B) = A^2 - B^2$.", "explanation": "$(3a)^2 - (2b)^2 = 9a^2 - 4b^2$.", "trapTip": "Square the entire term: $(3a)^2 = 9a^2$ and $(2b)^2 = 4b^2$."}, {"id": "p3-24", "module": "P.3", "topic": "Evaluating Polynomials", "difficulty": "Easy", "questionEn": "If $P(x) = 2x^3 - 4x^2 + 5x - 7$, find $P(-1)$.", "questionAr": "إذا كان $P(x) = 2x^3 - 4x^2 + 5x - 7$ ، فاحسب قيمة $P(-1)$.", "options": ["$-4$", "$-14$", "$-16$", "$-18$"], "correctIndex": 3, "hint": "Substitute $x = -1$: $(-1)^3 = -1$, $(-1)^2 = 1$.", "explanation": "$P(-1) = 2(-1) - 4(1) + 5(-1) - 7 = -2 - 4 - 5 - 7 = -18$.", "trapTip": "All terms are negative, so add their absolute values."}, {"id": "p3-25", "module": "P.3", "topic": "Special Products", "difficulty": "Hard", "questionEn": "Expand: $(2x - 3y)^3$", "questionAr": "فك المقدار: $(2x - 3y)^3$", "options": ["$8x^3 - 36x^2 y + 54xy^2 - 27y^3$", "$8x^3 - 27y^3$", "$8x^3 - 18x^2 y + 18xy^2 - 27y^3$", "$8x^3 + 36x^2 y - 54xy^2 + 27y^3$"], "correctIndex": 0, "hint": "Use $(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$ with $A = 2x$ and $B = 3y$.", "explanation": "$(2x)^3 - 3(2x)^2(3y) + 3(2x)(3y)^2 - (3y)^3 = 8x^3 - 3(4x^2)(3y) + 3(2x)(9y^2) - 27y^3 = 8x^3 - 36x^2 y + 54xy^2 - 27y^3$.", "trapTip": "Watch the middle coefficients: $3 \\times 4 \\times 3 = 36$ and $3 \\times 2 \\times 9 = 54$."}, {"id": "p3-26", "module": "P.3", "topic": "Binomial Expansion Term", "difficulty": "Medium", "questionEn": "What is the coefficient of $xy$ in the expansion of $(3x - 5y)^2$?", "questionAr": "ما هو معامل الحد $xy$ في مفكوك $(3x - 5y)^2$؟", "options": ["$-15$", "$-30$", "$30$", "$-45$"], "correctIndex": 1, "hint": "The middle term is $-2AB$.", "explanation": "$-2(3x)(5y) = -30xy$. Thus the coefficient is $-30$.", "trapTip": "Do not forget to multiply by 2 in $-2AB$."}, {"id": "p3-27", "module": "P.3", "topic": "Polynomial Products with Radicals", "difficulty": "Medium", "questionEn": "Multiply: $(\\sqrt{x} - 3)(\\sqrt{x} + 5)$ for $x \\ge 0$.", "questionAr": "اضرب المقدارين: $(\\sqrt{x} - 3)(\\sqrt{x} + 5)$ (حيث $x \\ge 0$).", "options": ["$x - 15$", "$x + 8\\sqrt{x} - 15$", "$x + 2\\sqrt{x} - 15$", "$x^2 + 2x - 15$"], "correctIndex": 2, "hint": "Use FOIL on terms with $\\sqrt{x}$.", "explanation": "First: $\\sqrt{x} \\cdot \\sqrt{x} = x$. Outer: $+5\\sqrt{x}$. Inner: $-3\\sqrt{x}$. Last: $-15$. Combined: $x + 2\\sqrt{x} - 15$.", "trapTip": "$\\sqrt{x} \\cdot \\sqrt{x} = x$, not $\\sqrt{x}$."}, {"id": "p3-28", "module": "P.3", "topic": "Polynomial Subtraction", "difficulty": "Easy", "questionEn": "Subtract: $(x^2 + 2x) - (3x^2 - 4x)$", "questionAr": "اطرح المقدارين: $(x^2 + 2x) - (3x^2 - 4x)$", "options": ["$-2x^2 - 2x$", "$4x^2 + 6x$", "$-2x^2 - 6x$", "$-2x^2 + 6x$"], "correctIndex": 3, "hint": "Distribute the minus sign: $-(3x^2 - 4x) = -3x^2 + 4x$.", "explanation": "$(1 - 3)x^2 + (2 + 4)x = -2x^2 + 6x$.", "trapTip": "$-(-4x) = +4x$."}, {"id": "p3-29", "module": "P.3", "topic": "Multiplication with Grouping", "difficulty": "Hard", "questionEn": "Multiply: $(a + b + c)^2$", "questionAr": "فك المقدار: $(a + b + c)^2$", "options": ["$a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$", "$a^2 + b^2 + c^2$", "$a^2 + b^2 + c^2 + ab + ac + bc$", "$a^2 + b^2 + c^2 + 4ab + 4ac + 4bc$"], "correctIndex": 0, "hint": "Group as $((a + b) + c)^2 = (a+b)^2 + 2(a+b)c + c^2$.", "explanation": "$(a^2 + 2ab + b^2) + (2ac + 2bc) + c^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$.", "trapTip": "Every pair has a cross-term with a coefficient of 2."}, {"id": "p3-30", "module": "P.3", "topic": "Classification of Terms", "difficulty": "Easy", "questionEn": "A polynomial with exactly two terms is called a:", "questionAr": "يُسمى كثير الحدود الذي يتكون من حدين فقط بـ:", "options": ["Monomial (وحيد حد)", "Binomial (ثنائي حد)", "Trinomial (ثلاثي حدود)", "$Quadratic (تربيعي)$"], "correctIndex": 1, "hint": "Prefix 'bi-' means two.", "explanation": "Monomial = 1 term, Binomial = 2 terms, Trinomial = 3 terms.", "trapTip": "'Quadratic' refers to degree 2, not the number of terms!"}, {"id": "p3-31", "module": "P.3", "topic": "Polynomial Multiplication", "difficulty": "Medium", "questionEn": "Expand: $(2x^2 - 3x + 1)(x - 2)$", "questionAr": "فك المقدار: $(2x^2 - 3x + 1)(x - 2)$", "options": ["$2x^3 - 3x^2 + x - 2$", "$2x^3 - 7x^2 - 5x - 2$", "$2x^3 - 7x^2 + 7x - 2$", "$2x^3 + x^2 - 5x - 2$"], "correctIndex": 2, "hint": "Multiply $(2x^2 - 3x + 1)$ by $x$, then by $-2$.", "explanation": "$x(2x^2 - 3x + 1) - 2(2x^2 - 3x + 1) = (2x^3 - 3x^2 + x) + (-4x^2 + 6x - 2) = 2x^3 - 7x^2 + 7x - 2$.", "trapTip": "$-3x^2 + (-4x^2) = -7x^2$."}, {"id": "p3-32", "module": "P.3", "topic": "Special Products", "difficulty": "Medium", "questionEn": "Expand: $(4x + 3y)(4x - 3y)$", "questionAr": "فك المقدار: $(4x + 3y)(4x - 3y)$", "options": ["$16x^2 + 9y^2$", "$16x^2 - 24xy - 9y^2$", "$8x^2 - 6y^2$", "$16x^2 - 9y^2$"], "correctIndex": 3, "hint": "Difference of squares formula: $A^2 - B^2$.", "explanation": "$(4x)^2 - (3y)^2 = 16x^2 - 9y^2$.", "trapTip": "No middle term remains."}, {"id": "p3-33", "module": "P.3", "topic": "Degree of Product", "difficulty": "Easy", "questionEn": "If $P(x)$ has degree 4 and $Q(x)$ has degree 3, what is the degree of $P(x) \\cdot Q(x)$?", "questionAr": "إذا كانت درجة كثير الحدود $P(x)$ هي 4 ودرجة $Q(x)$ هي 3، فما هي درجة حاصل الضرب $P(x) \\cdot Q(x)$؟", "options": ["$7$", "$12$", "$4$", "$1$"], "correctIndex": 0, "hint": "When multiplying polynomials, degrees add: $\\deg(P \\cdot Q) = \\deg(P) + \\deg(Q)$.", "explanation": "Degree is $4 + 3 = 7$.", "trapTip": "Add degrees, do NOT multiply them!"}, {"id": "p3-34", "module": "P.3", "topic": "Degree of Sum", "difficulty": "Medium", "questionEn": "If $P(x) = 5x^3 - 2x + 1$ and $Q(x) = -5x^3 + 4x^2 + 7$, what is the degree of $P(x) + Q(x)$?", "questionAr": "إذا كان $P(x) = 5x^3 - 2x + 1$ و $Q(x) = -5x^3 + 4x^2 + 7$ ، فما هي درجة المجموع $P(x) + Q(x)$؟", "options": ["$3$", "$2$", "$5$", "$6$"], "correctIndex": 1, "hint": "Add the polynomials and check the highest non-zero power.", "explanation": "$P(x) + Q(x) = (5 - 5)x^3 + 4x^2 - 2x + 8 = 4x^2 - 2x + 8$. Highest power is 2.", "trapTip": "The cubic terms cancel out ($5x^3 - 5x^3 = 0$), so the degree drops to 2!"}, {"id": "p3-35", "module": "P.3", "topic": "Special Products", "difficulty": "Medium", "questionEn": "Compute $102 \\times 98$ using special products.", "questionAr": "احسب $102 \\times 98$ باستخدام المتطابقات الجبرية الشهيرة.", "options": ["$9994$", "$10004$", "$9996$", "$9986$"], "correctIndex": 2, "hint": "Write as $(100 + 2)(100 - 2) = 100^2 - 2^2$.", "explanation": "$10000 - 4 = 9996$.", "trapTip": "$(A+B)(A-B) = A^2 - B^2$ makes mental arithmetic instant."}, {"id": "p3-36", "module": "P.3", "topic": "Polynomial Simplification", "difficulty": "Medium", "questionEn": "Simplify: $(x - 1)^2 + 2(x - 1) + 1$", "questionAr": "بسّط المقدار: $(x - 1)^2 + 2(x - 1) + 1$", "options": ["$x^2 - 2x + 4$", "$x^2 + 1$", "$x^2 - 1$", "$x^2$"], "correctIndex": 3, "hint": "Recognize the form $u^2 + 2u + 1 = (u + 1)^2$ with $u = x - 1$.", "explanation": "$((x - 1) + 1)^2 = x^2$.", "trapTip": "Spotting quadratic structures saves time."}, {"id": "p3-37", "module": "P.3", "topic": "Polynomial Products", "difficulty": "Easy", "questionEn": "Multiply: $-3x^2(4x^3 - 2x + 5)$", "questionAr": "اضرب وحيد الحد في كثير الحدود: $-3x^2(4x^3 - 2x + 5)$", "options": ["$-12x^5 + 6x^3 - 15x^2$", "$-12x^6 + 6x^2 - 15x^2$", "$-12x^5 - 6x^3 - 15x^2$", "$12x^5 - 6x^3 + 15x^2$"], "correctIndex": 0, "hint": "Distribute $-3x^2$ to each term, adding exponents of $x$.", "explanation": "$-3x^2(4x^3) = -12x^5$, $-3x^2(-2x) = +6x^3$, $-3x^2(5) = -15x^2$.", "trapTip": "Negative times negative is positive: $-3x^2 \\times (-2x) = +6x^3$."}, {"id": "p3-38", "module": "P.3", "topic": "Difference of Cubes Expansion", "difficulty": "Medium", "questionEn": "Expand: $(x - 3)(x^2 + 3x + 9)$", "questionAr": "فك المقدار: $(x - 3)(x^2 + 3x + 9)$", "options": ["$x^3 + 27$", "$x^3 - 27$", "$x^3 - 9$", "$x^3 - 6x^2 + 27$"], "correctIndex": 1, "hint": "Recognize the formula $(A - B)(A^2 + AB + B^2) = A^3 - B^3$.", "explanation": "Here $A = x, B = 3$. Result: $x^3 - 3^3 = x^3 - 27$.", "trapTip": "All intermediate terms cancel out completely."}, {"id": "p3-39", "module": "P.3", "topic": "Sum of Cubes Expansion", "difficulty": "Medium", "questionEn": "Expand: $(2x + 1)(4x^2 - 2x + 1)$", "questionAr": "فك المقدار: $(2x + 1)(4x^2 - 2x + 1)$", "options": ["$8x^3 - 1$", "$6x^3 + 1$", "$8x^3 + 1$", "$8x^3 + 4x^2 + 1$"], "correctIndex": 2, "hint": "Recognize $(A + B)(A^2 - AB + B^2) = A^3 + B^3$.", "explanation": "Here $A = 2x, B = 1$. Result: $(2x)^3 + 1^3 = 8x^3 + 1$.", "trapTip": "$(2x)^3 = 8x^3$."}, {"id": "p3-40", "module": "P.3", "topic": "Special Products", "difficulty": "Hard", "questionEn": "Find the value of $k$ such that $x^2 + 14x + k$ is a perfect square trinomial.", "questionAr": "أوجد قيمة $k$ التي تجعل المقدار $x^2 + 14x + k$ ثلاثي حدود يمثل مربعاً كاملاً.", "options": ["$14$", "$28$", "$196$", "$49$"], "correctIndex": 3, "hint": "For $x^2 + bx + k$ to be a perfect square, $k = (b/2)^2$.", "explanation": "$k = (14/2)^2 = 7^2 = 49$.", "trapTip": "Divide the middle coefficient by 2, then square it."}, {"id": "p4-01", "module": "P.4", "topic": "Greatest Common Factor", "difficulty": "Easy", "questionEn": "Factor out the Greatest Common Factor (GCF): $12x^4 y^2 - 18x^3 y^5 + 6x^2 y^3$", "questionAr": "أخرج العامل المشترك الأكبر (GCF): $12x^4 y^2 - 18x^3 y^5 + 6x^2 y^3$", "options": ["$6x^2 y^2(2x^2 - 3x y^3 + y)$", "$6x^2 y^2(2x^2 - 3x y^3)$", "$6xy(2x^3 y - 3x^2 y^4 + xy^2)$", "$3x^2 y^2(4x^2 - 6x y^3 + 2y)$"], "correctIndex": 0, "hint": "Find the GCF of coefficients (6) and the lowest power of each variable ($x^2, y^2$).", "explanation": "$\\text{GCF} = 6x^2 y^2$. Dividing each term: $\\frac{12x^4 y^2}{6x^2 y^2} = 2x^2$, $\\frac{-18x^3 y^5}{6x^2 y^2} = -3xy^3$, $\\frac{6x^2 y^3}{6x^2 y^2} = y$. Result: $6x^2 y^2(2x^2 - 3xy^3 + y)$.", "trapTip": "Don't forget the last term $+y$; the coefficient becomes 1."}, {"id": "p4-02", "module": "P.4", "topic": "Factoring by Grouping", "difficulty": "Medium", "questionEn": "Factor completely: $x^3 + 3x^2 - 4x - 12$", "questionAr": "حلل تحليلاً كاملاً بالتجميع: $x^3 + 3x^2 - 4x - 12$", "options": ["$(x + 3)(x^2 + 4)$", "$(x + 3)(x - 2)(x + 2)$", "$(x - 3)(x - 2)(x + 2)$", "$(x + 3)(x - 4)(x + 1)$"], "correctIndex": 1, "hint": "Group the first two and last two terms: $x^2(x + 3) - 4(x + 3)$.", "explanation": "$x^2(x + 3) - 4(x + 3) = (x + 3)(x^2 - 4) = (x + 3)(x - 2)(x + 2)$.", "trapTip": "Always check if the resulting binomial can be factored further ($x^2 - 4$ is a difference of squares)!"}, {"id": "p4-03", "module": "P.4", "topic": "Trinomial Factoring", "difficulty": "Easy", "questionEn": "Factor the trinomial: $x^2 - 7x + 12$", "questionAr": "حلل ثلاثي الحدود: $x^2 - 7x + 12$", "options": ["$(x - 2)(x - 6)$", "$(x + 3)(x + 4)$", "$(x - 3)(x - 4)$", "$(x - 1)(x - 12)$"], "correctIndex": 2, "hint": "Find two numbers that multiply to $+12$ and add to $-7$.", "explanation": "$(-3) \\times (-4) = 12$ and $(-3) + (-4) = -7$. Thus, $(x - 3)(x - 4)$.", "trapTip": "Since the constant is positive and the middle term is negative, both factors must have negative signs."}, {"id": "p4-04", "module": "P.4", "topic": "Trinomial Factoring with a > 1", "difficulty": "Medium", "questionEn": "Factor completely: $2x^2 + 7x + 3$", "questionAr": "حلل تحليلاً كاملاً: $2x^2 + 7x + 3$", "options": ["$(2x + 3)(x + 1)$", "$(2x - 1)(x - 3)$", "$(x + 1)(x + 6)$", "$(2x + 1)(x + 3)$"], "correctIndex": 3, "hint": "Use the $ac$ method: $a \\cdot c = 2 \\cdot 3 = 6$. Find factors of 6 that add to 7: 6 and 1.", "explanation": "$2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)$.", "trapTip": "Verify by FOIL: $(2x)(3) + 1(x) = 6x + x = 7x$."}, {"id": "p4-05", "module": "P.4", "topic": "Difference of Squares", "difficulty": "Easy", "questionEn": "Factor: $49x^2 - 64y^2$", "questionAr": "حلل فرق المربعين: $49x^2 - 64y^2$", "options": ["$(7x - 8y)(7x + 8y)$", "$(7x - 8y)^2$", "$(7x + 8y)^2$", "$(49x - 64y)(x + y)$"], "correctIndex": 0, "hint": "Use $A^2 - B^2 = (A - B)(A + B)$ where $A = 7x$ and $B = 8y$.", "explanation": "$(7x)^2 - (8y)^2 = (7x - 8y)(7x + 8y)$.", "trapTip": "The difference of squares factors into conjugate binomials, not a squared binomial."}, {"id": "p4-06", "module": "P.4", "topic": "Repeated Difference of Squares", "difficulty": "Medium", "questionEn": "Factor completely over the integers: $x^4 - 81$", "questionAr": "حلل تحليلاً كاملاً في مجموعة الأعداد الصحيحة: $x^4 - 81$", "options": ["$(x - 3)^2(x + 3)^2$", "$(x^2 + 9)(x - 3)(x + 3)$", "$(x^2 - 9)(x^2 + 9)$", "$(x - 3)^4$"], "correctIndex": 1, "hint": "First factor as $(x^2 - 9)(x^2 + 9)$, then factor $x^2 - 9$ again.", "explanation": "$x^4 - 81 = (x^2 - 9)(x^2 + 9) = (x - 3)(x + 3)(x^2 + 9)$. Note that $x^2 + 9$ cannot be factored over real numbers.", "trapTip": "Sum of squares $x^2 + 9$ is prime over the real numbers!"}, {"id": "p4-07", "module": "P.4", "topic": "Sum of Cubes", "difficulty": "Medium", "questionEn": "Factor: $8x^3 + 27$", "questionAr": "حلل مجموع المكعبين: $8x^3 + 27$", "options": ["$(2x + 3)(4x^2 + 6x + 9)$", "$(2x + 3)^3$", "$(2x + 3)(4x^2 - 6x + 9)$", "$(2x - 3)(4x^2 + 6x + 9)$"], "correctIndex": 2, "hint": "Use $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$ with $A = 2x$ and $B = 3$.", "explanation": "$A^2 = (2x)^2 = 4x^2$, $AB = (2x)(3) = 6x$, $B^2 = 3^2 = 9$. Thus, $(2x + 3)(4x^2 - 6x + 9)$.", "trapTip": "SOAP rule for signs: Same ($+$), Opposite ($-$), Always Positive ($+$)."}, {"id": "p4-08", "module": "P.4", "topic": "Difference of Cubes", "difficulty": "Medium", "questionEn": "Factor: $x^3 - 64$", "questionAr": "حلل فرق المكعبين: $x^3 - 64$", "options": ["$(x - 4)(x^2 - 4x + 16)$", "$(x - 4)^3$", "$(x + 4)(x^2 - 4x + 16)$", "$(x - 4)(x^2 + 4x + 16)$"], "correctIndex": 3, "hint": "Use $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$ with $A = x$ and $B = 4$.", "explanation": "$(x - 4)(x^2 + 4x + 16)$.", "trapTip": "The middle term is $+AB = +4x$, NOT $+2AB = +8x$!"}, {"id": "p4-09", "module": "P.4", "topic": "Perfect Square Trinomial", "difficulty": "Easy", "questionEn": "Factor: $25x^2 - 30x + 9$", "questionAr": "حلل ثلاثي الحدود المربع الكامل: $25x^2 - 30x + 9$", "options": ["$(5x - 3)^2$", "$(5x + 3)^2$", "$(5x - 3)(5x + 3)$", "$(25x - 9)(x - 1)$"], "correctIndex": 0, "hint": "Check if $2AB = 2(5x)(3) = 30x$.", "explanation": "$(5x)^2 - 2(5x)(3) + 3^2 = (5x - 3)^2$.", "trapTip": "Because the middle term is negative, the binomial is $(5x - 3)^2$."}, {"id": "p4-10", "module": "P.4", "topic": "Multi-Step Factoring", "difficulty": "Medium", "questionEn": "Factor completely: $3x^3 - 12x$", "questionAr": "حلل تحليلاً كاملاً: $3x^3 - 12x$", "options": ["$3x(x^2 - 4)$", "$3x(x - 2)(x + 2)$", "$3(x^3 - 4x)$", "$(3x^2 - 6)(x + 2)$"], "correctIndex": 1, "hint": "Always factor out the GCF ($3x$) first!", "explanation": "$3x(x^2 - 4) = 3x(x - 2)(x + 2)$.", "trapTip": "Factoring is not complete until all factorable sub-expressions are factored."}, {"id": "p4-11", "module": "P.4", "topic": "Trinomial Factoring with a > 1", "difficulty": "Hard", "questionEn": "Factor completely: $6x^2 - 11x - 10$", "questionAr": "حلل تحليلاً كاملاً: $6x^2 - 11x - 10$", "options": ["$(6x - 5)(x + 2)$", "$(3x - 5)(2x + 2)$", "$(2x - 5)(3x + 2)$", "$(2x + 5)(3x - 2)$"], "correctIndex": 2, "hint": "Find factors of $ac = 6(-10) = -60$ that add to $-11$: $-15$ and $4$.", "explanation": "$6x^2 - 15x + 4x - 10 = 3x(2x - 5) + 2(2x - 5) = (2x - 5)(3x + 2)$.", "trapTip": "Check signs: $(2x)(2) + (-5)(3x) = 4x - 15x = -11x$."}, {"id": "p4-12", "module": "P.4", "topic": "Factoring by Grouping (3 and 1)", "difficulty": "Hard", "questionEn": "Factor: $x^2 - 6x + 9 - y^2$", "questionAr": "حلل المقدار: $x^2 - 6x + 9 - y^2$", "options": ["$(x - 3 - y)^2$", "$(x - 3)(x + 3) - y^2$", "$(x + 3 - y)(x + 3 + y)$", "$(x - 3 - y)(x - 3 + y)$"], "correctIndex": 3, "hint": "Group the first three terms as a perfect square: $(x^2 - 6x + 9) - y^2 = (x - 3)^2 - y^2$.", "explanation": "Difference of squares: $((x - 3) - y)((x - 3) + y) = (x - 3 - y)(x - 3 + y)$.", "trapTip": "Recognize 3-term perfect square trinomial minus a square."}, {"id": "p4-13", "module": "P.4", "topic": "Factoring Fractional Exponents", "difficulty": "Hard", "questionEn": "Factor out the smallest power of $x$: $x^{-1/2} + 2x^{1/2} + x^{3/2}$", "questionAr": "أخرج أصغر قوة لـ $x$ كعامل مشترك: $x^{-1/2} + 2x^{1/2} + x^{3/2}$", "options": ["$x^{-1/2}(x + 1)^2$", "$x^{1/2}(x + 1)^2$", "$x^{-1/2}(1 + 2x + x^3)$", "$x^{-1/2}(x^2 + 2x + 1)$"], "correctIndex": 0, "hint": "Factor out $x^{-1/2}$: $x^{-1/2}(1 + 2x^{1/2 - (-1/2)} + x^{3/2 - (-1/2)}) = x^{-1/2}(1 + 2x + x^2)$.", "explanation": "$1 + 2x + x^2 = (x + 1)^2$. Result: $x^{-1/2}(x + 1)^2$.", "trapTip": "Subtracting negative exponent when factoring: $1/2 - (-1/2) = 1$."}, {"id": "p4-14", "module": "P.4", "topic": "Greatest Common Factor with Binomial", "difficulty": "Easy", "questionEn": "Factor: $5x(x - 2) - 3(x - 2)$", "questionAr": "حلل المقدار: $5x(x - 2) - 3(x - 2)$", "options": ["$(x - 2)(5x + 3)$", "$(x - 2)(5x - 3)$", "$5x - 3$", "$(x + 2)(5x - 3)$"], "correctIndex": 1, "hint": "The common binomial factor is $(x - 2)$.", "explanation": "Factoring out $(x - 2)$ leaves $(5x - 3)$. Result: $(x - 2)(5x - 3)$.", "trapTip": "Treat the entire binomial $(x - 2)$ as a single common factor."}, {"id": "p4-15", "module": "P.4", "topic": "Factoring Sum of Squares", "difficulty": "Easy", "questionEn": "Factor completely over the set of real numbers: $x^2 + 16$", "questionAr": "حلل تحليلاً كاملاً في مجموعة الأعداد الحقيقية: $x^2 + 16$", "options": ["$(x - 4)(x + 4)$", "$(x + 4)^2$", "$\\text{Prime (Cannot be factored over } \\mathbb{R})$", "$(x - 4)^2$"], "correctIndex": 2, "hint": "The sum of two squares $A^2 + B^2$ cannot be factored over real numbers.", "explanation": "$x^2 + 16 > 0$ for all real $x$, having no real roots. It is prime over $\\mathbb{R}$.", "trapTip": "Do NOT confuse the sum of squares $x^2 + 16$ with difference of squares $x^2 - 16$!"}, {"id": "p4-16", "module": "P.4", "topic": "Factoring by Grouping", "difficulty": "Medium", "questionEn": "Factor: $2ax - 3bx + 2ay - 3by$", "questionAr": "حلل بالتجميع: $2ax - 3bx + 2ay - 3by$", "options": ["$(2a + 3b)(x - y)$", "$(2x - 3y)(a + b)$", "$(2a - 3b)(x - y)$", "$(2a - 3b)(x + y)$"], "correctIndex": 3, "hint": "Group as $x(2a - 3b) + y(2a - 3b)$.", "explanation": "Factoring out $(2a - 3b)$ yields $(2a - 3b)(x + y)$.", "trapTip": "Notice the common binomial factor $(2a - 3b)$ in both groups."}, {"id": "p4-17", "module": "P.4", "topic": "Multi-Step Factoring", "difficulty": "Hard", "questionEn": "Factor completely: $2x^4 - 32$", "questionAr": "حلل تحليلاً كاملاً: $2x^4 - 32$", "options": ["$2(x^2 + 4)(x - 2)(x + 2)$", "$2(x - 2)^2(x + 2)^2$", "$(2x^2 - 8)(x^2 + 4)$", "$2(x^4 - 16)$"], "correctIndex": 0, "hint": "GCF is 2: $2(x^4 - 16) = 2(x^2 - 4)(x^2 + 4)$.", "explanation": "Factor $x^2 - 4$ as $(x - 2)(x + 2)$. Result: $2(x^2 + 4)(x - 2)(x + 2)$.", "trapTip": "$x^2 + 4$ remains unfactored over $\\mathbb{R}$."}, {"id": "p4-18", "module": "P.4", "topic": "Trinomial with Two Variables", "difficulty": "Medium", "questionEn": "Factor: $x^2 - 5xy - 24y^2$", "questionAr": "حلل المقدار: $x^2 - 5xy - 24y^2$", "options": ["$(x + 8y)(x - 3y)$", "$(x - 8y)(x + 3y)$", "$(x - 6y)(x + 4y)$", "$(x - 12y)(x + 2y)$"], "correctIndex": 1, "hint": "Find factors of $-24$ that sum to $-5$: $-8$ and $+3$.", "explanation": "$(x - 8y)(x + 3y)$. Check: $-8xy + 3xy = -5xy$.", "trapTip": "Include $y$ in the second term of each binomial."}, {"id": "p4-19", "module": "P.4", "topic": "Negative GCF", "difficulty": "Medium", "questionEn": "Factor out $-4x$ from $-4x^3 + 12x^2 - 8x$.", "questionAr": "أخرج العامل $-4x$ من المقدار $-4x^3 + 12x^2 - 8x$.", "options": ["$-4x(x^2 + 3x - 2)$", "$-4x(x^2 - 3x - 2)$", "$-4x(x^2 - 3x + 2)$", "$4x(-x^2 + 3x - 2)$"], "correctIndex": 2, "hint": "Divide each term by $-4x$, reversing signs.", "explanation": "$\\frac{-4x^3}{-4x} = x^2$, $\\frac{12x^2}{-4x} = -3x$, $\\frac{-8x}{-4x} = +2$. Result: $-4x(x^2 - 3x + 2)$.", "trapTip": "Factoring out a negative changes all the signs inside."}, {"id": "p4-20", "module": "P.4", "topic": "Factoring Trinomials a > 1", "difficulty": "Medium", "questionEn": "One of the factors of $3x^2 + 10x - 8$ is:", "questionAr": "أحد عوامل المقدار $3x^2 + 10x - 8$ هو:", "options": ["$3x + 2$", "$x - 4$", "$3x - 4$", "$3x - 2$"], "correctIndex": 3, "hint": "$ac = 3(-8) = -24$. Factors of $-24$ that sum to $10$: $12$ and $-2$.", "explanation": "$3x^2 + 12x - 2x - 8 = 3x(x + 4) - 2(x + 4) = (3x - 2)(x + 4)$.", "trapTip": "The two factors are $(3x - 2)$ and $(x + 4)$."}, {"id": "p4-21", "module": "P.4", "topic": "Difference of Cubes", "difficulty": "Hard", "questionEn": "Factor completely: $x^6 - 64$", "questionAr": "حلل تحليلاً كاملاً: $x^6 - 64$", "options": ["$(x - 2)(x + 2)(x^2 - 2x + 4)(x^2 + 2x + 4)$", "$(x^3 - 8)(x^3 + 8)$", "$(x - 2)^3(x + 2)^3$", "$(x^2 - 4)(x^4 + 4x^2 + 16)$"], "correctIndex": 0, "hint": "Treat as difference of squares first: $(x^3 - 8)(x^3 + 8)$.", "explanation": "Factor both sum and difference of cubes:\n$x^3 - 8 = (x - 2)(x^2 + 2x + 4)$\n$x^3 + 8 = (x + 2)(x^2 - 2x + 4)$.", "trapTip": "Always factor as difference of squares first, then cubes. Doing cubes first makes it much harder!"}, {"id": "p4-22", "module": "P.4", "topic": "Factoring by Substitution", "difficulty": "Hard", "questionEn": "Factor: $(x - 2)^2 - 5(x - 2) - 14$", "questionAr": "حلل المقدار: $(x - 2)^2 - 5(x - 2) - 14$", "options": ["$(x - 7)(x + 2)$", "$(x - 9)(x + 0) = x(x - 9)$", "$(x - 5)(x - 2)$", "$(x - 9)(x + 2)$"], "correctIndex": 1, "hint": "Let $u = x - 2$. Then $u^2 - 5u - 14 = (u - 7)(u + 2)$.", "explanation": "Substitute back $u = x - 2$:\n$(x - 2 - 7)(x - 2 + 2) = (x - 9)(x) = x(x - 9)$.", "trapTip": "Don't forget to simplify $(x - 2 + 2) = x$."}, {"id": "p4-23", "module": "P.4", "topic": "Factoring Multi-Step", "difficulty": "Medium", "questionEn": "Factor completely: $5x^3 - 40$", "questionAr": "حلل تحليلاً كاملاً: $5x^3 - 40$", "options": ["$5(x - 2)^3$", "$5(x - 2)(x^2 - 2x + 4)$", "$5(x - 2)(x^2 + 2x + 4)$", "$(5x - 10)(x^2 + 2x + 4)$"], "correctIndex": 2, "hint": "Factor out GCF 5 first: $5(x^3 - 8)$.", "explanation": "Difference of cubes: $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$. Result: $5(x - 2)(x^2 + 2x + 4)$.", "trapTip": "The quadratic factor $x^2 + 2x + 4$ from a sum/difference of cubes cannot be factored further over reals."}, {"id": "p4-24", "module": "P.4", "topic": "Factoring by Grouping", "difficulty": "Medium", "questionEn": "Factor: $x^3 - 5x^2 + 2x - 10$", "questionAr": "حلل بالتجميع: $x^3 - 5x^2 + 2x - 10$", "options": ["$(x - 5)(x + \\sqrt{2})(x - \\sqrt{2})$", "$(x + 5)(x^2 - 2)$", "$(x^2 - 5)(x + 2)$", "$(x - 5)(x^2 + 2)$"], "correctIndex": 3, "hint": "Group pairs: $x^2(x - 5) + 2(x - 5)$.", "explanation": "Factor out $(x - 5)$ to get $(x - 5)(x^2 + 2)$.", "trapTip": "$x^2 + 2$ has no real factors."}, {"id": "p4-25", "module": "P.4", "topic": "Difference of Squares with Coefficients", "difficulty": "Medium", "questionEn": "Factor: $16x^4 - y^4$", "questionAr": "حلل المقدار: $16x^4 - y^4$", "options": ["$(4x^2 + y^2)(2x - y)(2x + y)$", "$(4x^2 - y^2)^2$", "$(4x^2 - y^2)(4x^2 + y^2)$", "$(2x - y)^4$"], "correctIndex": 0, "hint": "$(4x^2)^2 - (y^2)^2 = (4x^2 - y^2)(4x^2 + y^2)$.", "explanation": "Factor $4x^2 - y^2 = (2x - y)(2x + y)$. Result: $(4x^2 + y^2)(2x - y)(2x + y)$.", "trapTip": "Remember to factor the difference of squares a second time."}, {"id": "p4-26", "module": "P.4", "topic": "Trinomial Factoring", "difficulty": "Easy", "questionEn": "Factor: $x^2 + 2x - 35$", "questionAr": "حلل ثلاثي الحدود: $x^2 + 2x - 35$", "options": ["$(x - 7)(x + 5)$", "$(x + 7)(x - 5)$", "$(x + 1)(x - 35)$", "$(x - 1)(x + 35)$"], "correctIndex": 1, "hint": "Find factors of $-35$ that add to $+2$: $+7$ and $-5$.", "explanation": "$(x + 7)(x - 5)$.", "trapTip": "The larger factor gets the sign of the middle term ($+7$)."}, {"id": "p4-27", "module": "P.4", "topic": "Perfect Square Trinomial", "difficulty": "Easy", "questionEn": "Which of the following is a perfect square trinomial?", "questionAr": "أي من المقادير التالية يُعد ثلاثي حدود مربعاً كاملاً؟", "options": ["$4x^2 - 6x + 9$", "$4x^2 + 12x - 9$", "$4x^2 - 12x + 9$", "$4x^2 - 10x + 9$"], "correctIndex": 2, "hint": "A perfect square trinomial has $b^2 = 4ac$.", "explanation": "$(-12)^2 = 144$, and $4(4)(9) = 144$. $(2x - 3)^2 = 4x^2 - 12x + 9$.", "trapTip": "The last term must be positive and $b = \\pm 2\\sqrt{a}\\sqrt{c}$."}, {"id": "p4-28", "module": "P.4", "topic": "Factoring with Negative Exponent", "difficulty": "Hard", "questionEn": "Factor out $(x + 1)^{-1/2}$ from $(x + 1)^{1/2} - (x + 1)^{-1/2}$.", "questionAr": "أخرج العامل $(x + 1)^{-1/2}$ من المقدار $(x + 1)^{1/2} - (x + 1)^{-1/2}$.", "options": ["$(x + 2)(x + 1)^{-1/2}$", "$(x - 1)(x + 1)^{-1/2}$", "$(x + 1)^{-1/2}$", "$x(x + 1)^{-1/2}$"], "correctIndex": 3, "hint": "Factoring out $(x + 1)^{-1/2}$ gives $(x + 1)^{-1/2} [(x + 1)^{1/2 - (-1/2)} - 1]$.", "explanation": "$1/2 - (-1/2) = 1$, so the bracket is $(x + 1)^1 - 1 = x$. Result: $x(x + 1)^{-1/2}$.", "trapTip": "$(x + 1) - 1 = x$."}, {"id": "p4-29", "module": "P.4", "topic": "Trinomial a > 1", "difficulty": "Medium", "questionEn": "Factor completely: $4x^2 - 4x - 15$", "questionAr": "حلل تحليلاً كاملاً: $4x^2 - 4x - 15$", "options": ["$(2x - 5)(2x + 3)$", "$(4x - 15)(x + 1)$", "$(2x + 5)(2x - 3)$", "$(4x - 5)(x + 3)$"], "correctIndex": 0, "hint": "$ac = 4(-15) = -60$. Factors of $-60$ that sum to $-4$: $-10$ and $+6$.", "explanation": "$4x^2 - 10x + 6x - 15 = 2x(2x - 5) + 3(2x - 5) = (2x - 5)(2x + 3)$.", "trapTip": "FOIL check: $-10x + 6x = -4x$."}, {"id": "p4-30", "module": "P.4", "topic": "Sum of Cubes", "difficulty": "Medium", "questionEn": "One of the factors of $27x^3 + y^3$ is:", "questionAr": "أحد عوامل المقدار $27x^3 + y^3$ هو:", "options": ["$3x - y$", "$3x + y$", "$9x^2 + y^2$", "$9x^2 + 3xy + y^2$"], "correctIndex": 1, "hint": "Use $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$ with $A = 3x, B = y$.", "explanation": "The factors are $(3x + y)$ and $(9x^2 - 3xy + y^2)$.", "trapTip": "The linear factor for sum of cubes has the same sign: $(3x + y)$."}, {"id": "p4-31", "module": "P.4", "topic": "Multi-Step Factoring GCF", "difficulty": "Easy", "questionEn": "Factor completely: $2x^2 - 18$", "questionAr": "حلل تحليلاً كاملاً: $2x^2 - 18$", "options": ["$(2x - 6)(x + 3)$", "$2(x^2 - 9)$", "$2(x - 3)(x + 3)$", "$(2x - 3)(x + 6)$"], "correctIndex": 2, "hint": "GCF is 2: $2(x^2 - 9)$.", "explanation": "$2(x^2 - 9) = 2(x - 3)(x + 3)$.", "trapTip": "Always factor out common numerical coefficients first."}, {"id": "p4-32", "module": "P.4", "topic": "Trinomial with GCF", "difficulty": "Medium", "questionEn": "Factor completely: $3x^3 - 15x^2 + 18x$", "questionAr": "حلل تحليلاً كاملاً: $3x^3 - 15x^2 + 18x$", "options": ["$3x(x - 1)(x - 6)$", "$3(x^3 - 5x^2 + 6x)$", "$(3x^2 - 6x)(x - 3)$", "$3x(x - 2)(x - 3)$"], "correctIndex": 3, "hint": "GCF is $3x$: $3x(x^2 - 5x + 6)$.", "explanation": "Factor trinomial: $x^2 - 5x + 6 = (x - 2)(x - 3)$. Result: $3x(x - 2)(x - 3)$.", "trapTip": "$-2 \\times -3 = +6$ and $-2 + -3 = -5$."}, {"id": "p4-33", "module": "P.4", "topic": "Factoring Grouping with Negative Signs", "difficulty": "Medium", "questionEn": "Factor: $xy - 4x - 3y + 12$", "questionAr": "حلل بالتجميع: $xy - 4x - 3y + 12$", "options": ["$(x - 3)(y - 4)$", "$(x + 3)(y - 4)$", "$(x - 4)(y - 3)$", "$(x - 3)(y + 4)$"], "correctIndex": 0, "hint": "Group: $x(y - 4) - 3(y - 4)$.", "explanation": "Factor out $-3$ from the second pair to reveal the common binomial $(y - 4)$: $(y - 4)(x - 3)$.", "trapTip": "$-3(y) + (-3)(-4) = -3y + 12$. Watch the sign change."}, {"id": "p4-34", "module": "P.4", "topic": "Difference of Squares with Expressions", "difficulty": "Hard", "questionEn": "Factor: $(2x + 1)^2 - (x - 3)^2$", "questionAr": "حلل المقدار: $(2x + 1)^2 - (x - 3)^2$", "options": ["$(3x - 2)(x - 2)$", "$(3x - 2)(x + 4)$", "$(x + 4)^2$", "$(3x + 4)(x - 2)$"], "correctIndex": 1, "hint": "Use $A^2 - B^2 = (A - B)(A + B)$.", "explanation": "$A - B = (2x + 1) - (x - 3) = x + 4$.\n$A + B = (2x + 1) + (x - 3) = 3x - 2$.\nProduct: $(x + 4)(3x - 2)$.", "trapTip": "Distribute the minus sign carefully: $-(x - 3) = -x + 3$."}, {"id": "p4-35", "module": "P.4", "topic": "Trinomial Factoring", "difficulty": "Easy", "questionEn": "Factor: $x^2 - x - 20$", "questionAr": "حلل ثلاثي الحدود: $x^2 - x - 20$", "options": ["$(x + 5)(x - 4)$", "$(x - 10)(x + 2)$", "$(x - 5)(x + 4)$", "$(x - 20)(x + 1)$"], "correctIndex": 2, "hint": "Find two numbers that multiply to $-20$ and add to $-1$: $-5$ and $+4$.", "explanation": "$(x - 5)(x + 4)$.", "trapTip": "$-5 + 4 = -1$."}, {"id": "p4-36", "module": "P.4", "topic": "Factoring by Grouping (4 terms)", "difficulty": "Hard", "questionEn": "Factor: $1 - a^2 - 2ab - b^2$", "questionAr": "حلل المقدار: $1 - a^2 - 2ab - b^2$", "options": ["$(1 - a + b)(1 + a - b)$", "$(1 - a - b)^2$", "$(1 + a + b)^2$", "$(1 - a - b)(1 + a + b)$"], "correctIndex": 3, "hint": "Factor out $-1$ from the last 3 terms: $1 - (a^2 + 2ab + b^2) = 1^2 - (a + b)^2$.", "explanation": "Difference of squares: $(1 - (a+b))(1 + (a+b)) = (1 - a - b)(1 + a + b)$.", "trapTip": "Grouping the last three terms requires factoring out $-1$ first!"}, {"id": "p4-37", "module": "P.4", "topic": "Factoring GCF Monomial", "difficulty": "Easy", "questionEn": "What is the GCF of $18x^3 y$, $24x^2 y^2$, and $36x y^3$?", "questionAr": "ما هو العامل المشترك الأكبر (GCF) للمقادير $18x^3 y$ و $24x^2 y^2$ و $36x y^3$؟", "options": ["$6xy$", "$12xy$", "$6x^3 y^3$", "$72x^3 y^3$"], "correctIndex": 0, "hint": "GCF of coefficients $18, 24, 36$ is 6. Smallest power of $x$ is $x^1$, and of $y$ is $y^1$.", "explanation": "$\\text{GCF} = 6xy$.", "trapTip": "Take the LOWEST exponent of each variable for GCF."}, {"id": "p4-38", "module": "P.4", "topic": "Trinomial a > 1", "difficulty": "Hard", "questionEn": "Factor: $5x^2 - 13x - 6$", "questionAr": "حلل المقدار: $5x^2 - 13x - 6$", "options": ["$(5x - 2)(x + 3)$", "$(5x + 2)(x - 3)$", "$(5x - 3)(x + 2)$", "$(5x + 3)(x - 2)$"], "correctIndex": 1, "hint": "$ac = 5(-6) = -30$. Factors of $-30$ that sum to $-13$: $-15$ and $+2$.", "explanation": "$5x^2 - 15x + 2x - 6 = 5x(x - 3) + 2(x - 3) = (5x + 2)(x - 3)$.", "trapTip": "Outer plus inner: $5x(-3) + 2(x) = -15x + 2x = -13x$."}, {"id": "p4-39", "module": "P.4", "topic": "Difference of Cubes with Coefficients", "difficulty": "Medium", "questionEn": "Factor: $27 - x^3$", "questionAr": "حلل فرق المكعبين: $27 - x^3$", "options": ["$(3 - x)(9 - 3x + x^2)$", "$(x - 3)(9 + 3x + x^2)$", "$(3 - x)(9 + 3x + x^2)$", "$(3 - x)^3$"], "correctIndex": 2, "hint": "$A^3 - B^3$ with $A = 3$ and $B = x$.", "explanation": "$(3 - x)(3^2 + 3x + x^2) = (3 - x)(9 + 3x + x^2)$.", "trapTip": "Keep the order: $3 - x$, not $x - 3$ (unless you factor out $-1$)."}, {"id": "p4-40", "module": "P.4", "topic": "Complete Multi-Step Factoring", "difficulty": "Hard", "questionEn": "Factor completely: $x^5 - x$", "questionAr": "حلل تحليلاً كاملاً: $x^5 - x$", "options": ["$x(x^4 - 1)$", "$x(x - 1)^2(x + 1)^2$", "$x(x^2 - 1)^2$", "$x(x^2 + 1)(x - 1)(x + 1)$"], "correctIndex": 3, "hint": "GCF is $x$: $x(x^4 - 1)$.", "explanation": "$x(x^2 - 1)(x^2 + 1) = x(x - 1)(x + 1)(x^2 + 1)$.", "trapTip": "Three factoring steps: GCF, difference of squares, then difference of squares again!"}, {"id": "p5-01", "module": "P.5", "topic": "Domain of Rational Expression", "difficulty": "Easy", "questionEn": "Find the domain of the rational expression: $\\frac{x + 4}{x^2 - 9}$", "questionAr": "أوجد مجال المقدار النسبي: $\\frac{x + 4}{x^2 - 9}$", "options": ["$\\{x \\mid x \\ne -3, 3\\}$", "$\\{x \\mid x \\ne 3\\}$", "$\\{x \\mid x \\ne -4\\}$", "$\\mathbb{R}$"], "correctIndex": 0, "hint": "Set the denominator equal to zero and solve: $x^2 - 9 = 0$.", "explanation": "$x^2 - 9 = 0 \\implies (x - 3)(x + 3) = 0 \\implies x = 3$ or $x = -3$. The domain is all real numbers except $-3$ and $3$.", "trapTip": "The numerator does not restrict the domain of a rational expression, only the denominator!"}, {"id": "p5-02", "module": "P.5", "topic": "Domain with Radicals", "difficulty": "Medium", "questionEn": "Find the domain of the expression: $\\frac{\\sqrt{x - 2}}{x - 5}$", "questionAr": "أوجد مجال التعبير: $\\frac{\\sqrt{x - 2}}{x - 5}$", "options": ["$[2, \\infty)$", "$[2, 5) \\cup (5, \\infty)$", "$(2, 5) \\cup (5, \\infty)$", "$(-\\infty, 5) \\cup (5, \\infty)$"], "correctIndex": 1, "hint": "Radicand must be non-negative ($x - 2 \\ge 0$) and denominator cannot be zero ($x - 5 \\ne 0$).", "explanation": "$x - 2 \\ge 0 \\implies x \\ge 2$. Denominator $x - 5 \\ne 0 \\implies x \\ne 5$. Combining these gives $[2, 5) \\cup (5, \\infty)$.", "trapTip": "Remember $x = 2$ is included because $\\sqrt{0} = 0$ is allowed in the numerator."}, {"id": "p5-03", "module": "P.5", "topic": "Simplifying Rational Expressions", "difficulty": "Easy", "questionEn": "Simplify to lowest terms: $\\frac{x^2 - 16}{x^2 - 3x - 4}$", "questionAr": "بسّط المقدار النسبي لأبسط صورة: $\\frac{x^2 - 16}{x^2 - 3x - 4}$", "options": ["$\\frac{x - 4}{x + 1}$", "$\\frac{x + 4}{x - 1}$", "$\\frac{x + 4}{x + 1}$", "$\\frac{4}{3x + 4}$"], "correctIndex": 2, "hint": "Factor both numerator and denominator completely before canceling.", "explanation": "Numerator: $(x - 4)(x + 4)$. Denominator: $(x - 4)(x + 1)$. Cancel $(x - 4)$ to get $\\frac{x + 4}{x + 1}$.", "trapTip": "Never cancel individual terms (e.g. $x^2$ with $x^2$); you can only cancel common FACTORS!"}, {"id": "p5-04", "module": "P.5", "topic": "Opposite Factors Property", "difficulty": "Medium", "questionEn": "Simplify: $\\frac{3 - x}{x^2 - 9}$", "questionAr": "بسّط المقدار: $\\frac{3 - x}{x^2 - 9}$", "options": ["$\\frac{1}{x + 3}$", "$\\frac{1}{x - 3}$", "$-\\frac{1}{x - 3}$", "$-\\frac{1}{x + 3}$"], "correctIndex": 3, "hint": "Notice that $3 - x = -(x - 3)$.", "explanation": "$\\frac{-(x - 3)}{(x - 3)(x + 3)} = -\\frac{1}{x + 3}$.", "trapTip": "$\\frac{a - b}{b - a} = -1$. Watch the negative sign!"}, {"id": "p5-05", "module": "P.5", "topic": "Multiplying Rational Expressions", "difficulty": "Medium", "questionEn": "Multiply and simplify: $\\frac{x^2 - 4}{x^2 + 2x} \\cdot \\frac{x^2}{x - 2}$", "questionAr": "اضرب وبسّط: $\\frac{x^2 - 4}{x^2 + 2x} \\cdot \\frac{x^2}{x - 2}$", "options": ["$x$", "$x + 2$", "$\\frac{x}{x - 2}$", "$x^2$"], "correctIndex": 0, "hint": "Factor each numerator and denominator:\n$\\frac{(x - 2)(x + 2)}{x(x + 2)} \\cdot \\frac{x^2}{x - 2}$.", "explanation": "Cancel $(x - 2)$, $(x + 2)$, and one power of $x$: leaves $x$.", "trapTip": "All binomial factors cancel out, leaving just $x$."}, {"id": "p5-06", "module": "P.5", "topic": "Dividing Rational Expressions", "difficulty": "Medium", "questionEn": "Divide: $\\frac{x^2 - 25}{2x} \\div \\frac{x + 5}{4x^2}$", "questionAr": "اقسم وبسّط: $\\frac{x^2 - 25}{2x} \\div \\frac{x + 5}{4x^2}$", "options": ["$\\frac{x - 5}{2x}$", "$2x(x - 5)$", "$2x(x + 5)$", "$\\frac{2(x - 5)}{x}$"], "correctIndex": 1, "hint": "Multiply by the reciprocal of the divisor: $\\frac{x^2 - 25}{2x} \\cdot \\frac{4x^2}{x + 5}$.", "explanation": "$\\frac{(x - 5)(x + 5)}{2x} \\cdot \\frac{4x^2}{x + 5} = (x - 5) \\cdot 2x = 2x(x - 5)$.", "trapTip": "Invert ONLY the second fraction (the divisor)."}, {"id": "p5-07", "module": "P.5", "topic": "Least Common Denominator", "difficulty": "Easy", "questionEn": "Find the LCD of $\\frac{1}{x^2 - 4}$ and $\\frac{1}{x^2 + 4x + 4}$.", "questionAr": "أوجد المضاعف المشترك الأصغر للمقامات (LCD) للكسرين $\\frac{1}{x^2 - 4}$ و $\\frac{1}{x^2 + 4x + 4}$.", "options": ["$(x - 2)(x + 2)$", "$(x - 2)^2(x + 2)^2$", "$(x - 2)(x + 2)^2$", "$(x^2 - 4)(x^2 + 4x + 4)$"], "correctIndex": 2, "hint": "Factor both denominators completely: $x^2 - 4 = (x - 2)(x + 2)$ and $x^2 + 4x + 4 = (x + 2)^2$.", "explanation": "Take the highest power of each distinct factor: $(x - 2)^1 (x + 2)^2$.", "trapTip": "Do not multiply denominators together without factoring; that creates an unnecessary higher-degree denominator."}, {"id": "p5-08", "module": "P.5", "topic": "Adding with Unlike Denominators", "difficulty": "Medium", "questionEn": "Perform the addition: $\\frac{2}{x + 3} + \\frac{1}{x - 1}$", "questionAr": "اجمع الكسرين التاليين: $\\frac{2}{x + 3} + \\frac{1}{x - 1}$", "options": ["$\\frac{3}{(x + 3)(x - 1)}$", "$\\frac{3x - 1}{(x + 3)(x - 1)}$", "$\\frac{3}{2x + 2}$", "$\\frac{3x + 1}{(x + 3)(x - 1)}$"], "correctIndex": 3, "hint": "The LCD is $(x + 3)(x - 1)$.", "explanation": "$\\frac{2(x - 1) + 1(x + 3)}{(x + 3)(x - 1)} = \\frac{2x - 2 + x + 3}{(x + 3)(x - 1)} = \\frac{3x + 1}{(x + 3)(x - 1)}$.", "trapTip": "Never just add numerators over added denominators!"}, {"id": "p5-09", "module": "P.5", "topic": "Subtracting Rational Expressions", "difficulty": "Medium", "questionEn": "Subtract: $\\frac{x}{x - 2} - \\frac{2}{x + 2}$", "questionAr": "اطرح الكسرين: $\\frac{x}{x - 2} - \\frac{2}{x + 2}$", "options": ["$\\frac{x^2 + 4}{x^2 - 4}$", "$\\frac{x^2 - 4}{x^2 - 4} = 1$", "$\\frac{x - 2}{x^2 - 4}$", "$\\frac{x^2 - 4x + 4}{x^2 - 4}$"], "correctIndex": 0, "hint": "LCD is $(x - 2)(x + 2) = x^2 - 4$.", "explanation": "Numerator: $x(x + 2) - 2(x - 2) = x^2 + 2x - 2x + 4 = x^2 + 4$. Result: $\\frac{x^2 + 4}{x^2 - 4}$.", "trapTip": "Notice $-2(-2) = +4$, so the numerator is $x^2 + 4$, which cannot be factored over real numbers."}, {"id": "p5-10", "module": "P.5", "topic": "Complex Fractions", "difficulty": "Hard", "questionEn": "Simplify the complex fraction: $\\frac{\\frac{1}{x} + \\frac{1}{y}}{\\frac{1}{x} - \\frac{1}{y}}$", "questionAr": "بسّط الكسر المركب: $\\frac{\\frac{1}{x} + \\frac{1}{y}}{\\frac{1}{x} - \\frac{1}{y}}$", "options": ["$\\frac{x + y}{x - y}$", "$\\frac{y + x}{y - x}$", "$\\frac{1}{y - x}$", "$1$"], "correctIndex": 1, "hint": "Multiply numerator and denominator of the entire complex fraction by $xy$.", "explanation": "$\\frac{xy(\\frac{1}{x} + \\frac{1}{y})}{xy(\\frac{1}{x} - \\frac{1}{y})} = \\frac{y + x}{y - x}$.", "trapTip": "$\\frac{1}{x} \\cdot xy = y$ and $\\frac{1}{y} \\cdot xy = x$, giving $y - x$ in the denominator, not $x - y$!"}, {"id": "p5-11", "module": "P.5", "topic": "Complex Fractions", "difficulty": "Hard", "questionEn": "Simplify: $\\frac{1 - \\frac{4}{x^2}}{1 + \\frac{2}{x}}$", "questionAr": "بسّط الكسر المركب: $\\frac{1 - \\frac{4}{x^2}}{1 + \\frac{2}{x}}$", "options": ["$\\frac{x + 2}{x}$", "$x - 2$", "$\\frac{x - 2}{x}$", "$\\frac{x - 2}{x + 2}$"], "correctIndex": 2, "hint": "Multiply all terms by $x^2$ or factor the numerator.", "explanation": "Numerator: $1 - \\frac{4}{x^2} = \\frac{x^2 - 4}{x^2} = \\frac{(x - 2)(x + 2)}{x^2}$. Denominator: $1 + \\frac{2}{x} = \\frac{x + 2}{x}$.\nDividing gives $\\frac{(x - 2)(x + 2)}{x^2} \\cdot \\frac{x}{x + 2} = \\frac{x - 2}{x}$.", "trapTip": "$(x + 2)$ cancels out completely."}, {"id": "p5-12", "module": "P.5", "topic": "Difference Quotient", "difficulty": "Hard", "questionEn": "Simplify: $\\frac{\\frac{1}{x + h} - \\frac{1}{x}}{h}$", "questionAr": "بسّط المقدار التالي: $\\frac{\\frac{1}{x + h} - \\frac{1}{x}}{h}$", "options": ["$\\frac{1}{x(x + h)}$", "$-\\frac{1}{(x + h)^2}$", "$\\frac{h}{x(x + h)}$", "$-\\frac{1}{x(x + h)}$"], "correctIndex": 3, "hint": "Combine the fractions in the numerator using LCD $x(x + h)$.", "explanation": "Numerator: $\\frac{x - (x + h)}{x(x + h)} = \\frac{-h}{x(x + h)}$.\nDividing by $h$: $\\frac{-h}{x(x + h)} \\cdot \\frac{1}{h} = -\\frac{1}{x(x + h)}$.", "trapTip": "Remember $x - (x + h) = -h$, retaining the negative sign."}, {"id": "p5-13", "module": "P.5", "topic": "Domain with Square Root Denominator", "difficulty": "Medium", "questionEn": "What is the domain of $f(x) = \\frac{1}{\\sqrt{9 - x^2}}$?", "questionAr": "ما هو مجال الدالة $f(x) = \\frac{1}{\\sqrt{9 - x^2}}$؟", "options": ["$(-3, 3)$", "$[-3, 3]$", "$(-\\infty, -3) \\cup (3, \\infty)$", "$(-\\infty, -3] \\cup [3, \\infty)$"], "correctIndex": 0, "hint": "Because the radical is in the denominator, the radicand must be strictly positive: $9 - x^2 > 0$.", "explanation": "$9 - x^2 > 0 \\implies x^2 < 9 \\implies -3 < x < 3$. In interval notation: $(-3, 3)$.", "trapTip": "Endpoints are excluded because division by zero is undefined!"}, {"id": "p5-14", "module": "P.5", "topic": "Adding with Factorable Denominators", "difficulty": "Hard", "questionEn": "Simplify: $\\frac{3}{x^2 - x - 2} - \\frac{1}{x - 2}$", "questionAr": "بسّط المقدار: $\\frac{3}{x^2 - x - 2} - \\frac{1}{x - 2}$", "options": ["$\\frac{2 - x}{(x - 2)(x + 1)}$", "$-\\frac{1}{x - 2}$", "$\\frac{1}{x + 1}$", "$-\\frac{1}{x + 1}$"], "correctIndex": 1, "hint": "Factor denominator: $x^2 - x - 2 = (x - 2)(x + 1)$. LCD is $(x - 2)(x + 1)$.", "explanation": "$\\frac{3 - 1(x + 1)}{(x - 2)(x + 1)} = \\frac{3 - x - 1}{(x - 2)(x + 1)} = \\frac{2 - x}{(x - 2)(x + 1)} = \\frac{-(x - 2)}{(x - 2)(x + 1)} = -\\frac{1}{x + 1}$.", "trapTip": "Notice that $2 - x = -(x - 2)$, which cancels with the denominator to leave $-\\frac{1}{x + 1}$!"}, {"id": "p5-15", "module": "P.5", "topic": "Simplifying Rational Expressions", "difficulty": "Medium", "questionEn": "Simplify: $\\frac{2x^2 + 5x - 3}{x^2 + 2x - 3}$", "questionAr": "بسّط المقدار النسبي: $\\frac{2x^2 + 5x - 3}{x^2 + 2x - 3}$", "options": ["$\\frac{2x + 1}{x + 1}$", "$\\frac{2x - 3}{x - 3}$", "$\\frac{2x - 1}{x - 1}$", "$2$"], "correctIndex": 2, "hint": "Factor numerator and denominator:\n$2x^2 + 5x - 3 = (2x - 1)(x + 3)$\n$x^2 + 2x - 3 = (x - 1)(x + 3)$.", "explanation": "Cancel $(x + 3)$ to get $\\frac{2x - 1}{x - 1}$.", "trapTip": "$(x + 3)$ is the common factor."}, {"id": "p5-16", "module": "P.5", "topic": "Domain with Denominator Polynomial", "difficulty": "Easy", "questionEn": "For which value(s) of $x$ is the expression $\\frac{x - 7}{2x^2 - 8}$ undefined?", "questionAr": "ما هي قيم $x$ التي تجعل المقدار $\\frac{x - 7}{2x^2 - 8}$ غير معرّف؟", "options": ["$x = 2$", "$x = 7$", "$x = \\pm 4$", "$x = \\pm 2$"], "correctIndex": 3, "hint": "Set denominator to zero: $2x^2 - 8 = 0 \\implies 2(x^2 - 4) = 0$.", "explanation": "$x^2 = 4 \\implies x = \\pm 2$.", "trapTip": "Remember that $x^2 = 4$ has two solutions: $+2$ and $-2$."}, {"id": "p5-17", "module": "P.5", "topic": "Multiplying Rational Expressions", "difficulty": "Medium", "questionEn": "Simplify: $\\frac{x^3 - 8}{x^2 - 4} \\cdot \\frac{x + 2}{x^2 + 2x + 4}$", "questionAr": "بسّط المقدار: $\\frac{x^3 - 8}{x^2 - 4} \\cdot \\frac{x + 2}{x^2 + 2x + 4}$", "options": ["$1$", "$x - 2$", "$\\frac{x - 2}{x + 2}$", "$x + 2$"], "correctIndex": 0, "hint": "Factor difference of cubes and difference of squares.", "explanation": "$\\frac{(x - 2)(x^2 + 2x + 4)}{(x - 2)(x + 2)} \\cdot \\frac{x + 2}{x^2 + 2x + 4} = 1$.", "trapTip": "All factors cancel out completely, yielding 1!"}, {"id": "p5-18", "module": "P.5", "topic": "Complex Fractions with Negative Powers", "difficulty": "Hard", "questionEn": "Simplify: $\\frac{a^{-2} - b^{-2}}{a^{-1} - b^{-1}}$", "questionAr": "بسّط المقدار: $\\frac{a^{-2} - b^{-2}}{a^{-1} - b^{-1}}$", "options": ["$\\frac{ab}{a + b}$", "$\\frac{a + b}{ab}$", "$a + b$", "$\\frac{b - a}{ab}$"], "correctIndex": 1, "hint": "Notice the numerator is a difference of squares: $(a^{-1} - b^{-1})(a^{-1} + b^{-1})$.", "explanation": "Cancel $(a^{-1} - b^{-1})$: leaves $a^{-1} + b^{-1} = \\frac{1}{a} + \\frac{1}{b} = \\frac{b + a}{ab}$.", "trapTip": "Using difference of squares on negative exponents is much faster than finding LCDs!"}, {"id": "p5-19", "module": "P.5", "topic": "Adding with Opposite Denominators", "difficulty": "Medium", "questionEn": "Simplify: $\\frac{5x}{x - 3} + \\frac{15}{3 - x}$", "questionAr": "بسّط المقدار: $\\frac{5x}{x - 3} + \\frac{15}{3 - x}$", "options": ["$\\frac{5x + 15}{x - 3}$", "$-5$", "$5$", "$\\frac{5(x - 3)}{(x - 3)^2}$"], "correctIndex": 2, "hint": "Rewrite $3 - x$ as $-(x - 3)$ so $\\frac{15}{3 - x} = -\\frac{15}{x - 3}$.", "explanation": "$\\frac{5x}{x - 3} - \\frac{15}{x - 3} = \\frac{5x - 15}{x - 3} = \\frac{5(x - 3)}{x - 3} = 5$.", "trapTip": "Changing the denominator's sign changes the addition to subtraction."}, {"id": "p5-20", "module": "P.5", "topic": "Rational Expression Simplification", "difficulty": "Easy", "questionEn": "Simplify: $\\frac{x^2 - x}{x}$", "questionAr": "بسّط المقدار: $\\frac{x^2 - x}{x}$", "options": ["$x^2 - 1$", "$x$", "$1$", "$x - 1$"], "correctIndex": 3, "hint": "Factor out $x$ from the numerator: $\\frac{x(x - 1)}{x}$.", "explanation": "Canceling $x$ gives $x - 1$.", "trapTip": "$\\frac{x^2 - x}{x} = \\frac{x^2}{x} - \\frac{x}{x} = x - 1$."}, {"id": "p5-21", "module": "P.5", "topic": "LCD of Three Expressions", "difficulty": "Medium", "questionEn": "Find the LCD of $\\frac{1}{2x}$, $\\frac{1}{3x^2}$, and $\\frac{1}{4x(x - 1)}$.", "questionAr": "أوجد المضاعف المشترك الأصغر لمقامات الكسور الثلاثة.", "options": ["$12x^2(x - 1)$", "$24x^3(x - 1)$", "$12x(x - 1)$", "$24x^2(x - 1)$"], "correctIndex": 0, "hint": "Coefficients: $\\text{LCM}(2, 3, 4) = 12$. Variable powers: highest power of $x$ is $x^2$, and factor $(x - 1)$.", "explanation": "LCD is $12x^2(x - 1)$.", "trapTip": "LCM of 2, 3, 4 is 12, not 24."}, {"id": "p5-22", "module": "P.5", "topic": "Division of Rational Expressions", "difficulty": "Easy", "questionEn": "Simplify: $\\frac{3x}{y} \\div \\frac{6x^2}{y^2}$", "questionAr": "بسّط المقدار: $\\frac{3x}{y} \\div \\frac{6x^2}{y^2}$", "options": ["$\\frac{2x}{y}$", "$\\frac{y}{2x}$", "$\\frac{18x^3}{y^3}$", "$\\frac{y^2}{2x}$"], "correctIndex": 1, "hint": "Multiply by the reciprocal: $\\frac{3x}{y} \\cdot \\frac{y^2}{6x^2}$.", "explanation": "$\\frac{3x y^2}{6x^2 y} = \\frac{y}{2x}$.", "trapTip": "Coefficients simplify to $3/6 = 1/2$."}, {"id": "p5-23", "module": "P.5", "topic": "Complex Fractions", "difficulty": "Hard", "questionEn": "Simplify: $\\frac{x - \\frac{1}{x}}{1 + \\frac{1}{x}}$", "questionAr": "بسّط المقدار: $\\frac{x - \\frac{1}{x}}{1 + \\frac{1}{x}}$", "options": ["$x + 1$", "$\\frac{x - 1}{x}$", "$x - 1$", "$x^2 - 1$"], "correctIndex": 2, "hint": "Multiply numerator and denominator by $x$.", "explanation": "$\\frac{x(x - 1/x)}{x(1 + 1/x)} = \\frac{x^2 - 1}{x + 1} = \\frac{(x - 1)(x + 1)}{x + 1} = x - 1$.", "trapTip": "$(x^2 - 1) / (x + 1) = x - 1$."}, {"id": "p5-24", "module": "P.5", "topic": "Domain of Rational Expression", "difficulty": "Easy", "questionEn": "Which real number is NOT in the domain of $g(x) = \\frac{2x - 5}{3x - 7}$?", "questionAr": "أي عدد حقيقي لا ينتمي إلى مجال الدالة $g(x) = \\frac{2x - 5}{3x - 7}$؟", "options": ["$\\frac{5}{2}$", "$-\\frac{7}{3}$", "$0$", "$\\frac{7}{3}$"], "correctIndex": 3, "hint": "Set $3x - 7 = 0 \\implies 3x = 7 \\implies x = 7/3$.", "explanation": "At $x = 7/3$, the denominator is 0, making the function undefined.", "trapTip": "Do not set the numerator to 0! $x = 5/2$ simply makes $g(x) = 0$, which is completely valid."}, {"id": "p5-25", "module": "P.5", "topic": "Subtracting Rational Expressions", "difficulty": "Medium", "questionEn": "Simplify: $\\frac{x + 1}{x - 1} - \\frac{x - 1}{x + 1}$", "questionAr": "بسّط المقدار: $\\frac{x + 1}{x - 1} - \\frac{x - 1}{x + 1}$", "options": ["$\\frac{4x}{x^2 - 1}$", "$\\frac{2}{x^2 - 1}$", "$\\frac{2x^2 + 2}{x^2 - 1}$", "$0$"], "correctIndex": 0, "hint": "LCD is $(x - 1)(x + 1) = x^2 - 1$.", "explanation": "Numerator: $(x + 1)^2 - (x - 1)^2 = (x^2 + 2x + 1) - (x^2 - 2x + 1) = 4x$. Result: $\\frac{4x}{x^2 - 1}$.", "trapTip": "$(x+1)^2 - (x-1)^2 = 4x$."}, {"id": "p5-26", "module": "P.5", "topic": "Domain with Absolute Value Denominator", "difficulty": "Medium", "questionEn": "Find the domain of $f(x) = \\frac{x + 2}{|x| - 3}$.", "questionAr": "أوجد مجال الدالة: $f(x) = \\frac{x + 2}{|x| - 3}$.", "options": ["$\\{x \\mid x \\ne 3\\}$", "$\\{x \\mid x \\ne -3, 3\\}$", "$\\{x \\mid x \\ne -2\\}$", "$(-3, 3)$"], "correctIndex": 1, "hint": "Denominator cannot be zero: $|x| - 3 \\ne 0 \\implies |x| \\ne 3$.", "explanation": "$|x| = 3 \\implies x = 3$ or $x = -3$. Thus $x \\ne \\pm 3$.", "trapTip": "Both $+3$ and $-3$ make the absolute value 3."}, {"id": "p5-27", "module": "P.5", "topic": "Simplifying Rational with Cubes", "difficulty": "Hard", "questionEn": "Simplify: $\\frac{x^3 + 1}{x^2 - x + 1}$", "questionAr": "بسّط المقدار: $\\frac{x^3 + 1}{x^2 - x + 1}$", "options": ["$x - 1$", "$(x + 1)^2$", "$x + 1$", "$1$"], "correctIndex": 2, "hint": "Factor numerator as sum of cubes: $x^3 + 1 = (x + 1)(x^2 - x + 1)$.", "explanation": "Cancel the common factor $(x^2 - x + 1)$: leaves $x + 1$.", "trapTip": "The quadratic factor in sum of cubes has no real roots and cancels cleanly."}, {"id": "p5-28", "module": "P.5", "topic": "Compound Fraction", "difficulty": "Hard", "questionEn": "Simplify: $\\frac{1}{1 + \\frac{1}{x}}$", "questionAr": "بسّط المقدار: $\\frac{1}{1 + \\frac{1}{x}}$", "options": ["$\\frac{1}{x + 1}$", "$x + 1$", "$\\frac{x + 1}{x}$", "$\\frac{x}{x + 1}$"], "correctIndex": 3, "hint": "Multiply numerator and denominator by $x$.", "explanation": "$\\frac{1 \\cdot x}{(1 + 1/x) \\cdot x} = \\frac{x}{x + 1}$.", "trapTip": "Do not take the reciprocal of each term individually!"}, {"id": "p5-29", "module": "P.5", "topic": "Multiplication with Quadratic Factors", "difficulty": "Medium", "questionEn": "Multiply: $\\frac{x^2 - 9}{x^2 - 1} \\cdot \\frac{x + 1}{x + 3}$", "questionAr": "اضرب وبسّط: $\\frac{x^2 - 9}{x^2 - 1} \\cdot \\frac{x + 1}{x + 3}$", "options": ["$\\frac{x - 3}{x - 1}$", "$\\frac{x + 3}{x + 1}$", "$\\frac{x - 3}{x + 1}$", "$1$"], "correctIndex": 0, "hint": "Factor all polynomials:\n$\\frac{(x - 3)(x + 3)}{(x - 1)(x + 1)} \\cdot \\frac{x + 1}{x + 3}$.", "explanation": "Cancel $(x + 3)$ and $(x + 1)$: leaves $\\frac{x - 3}{x - 1}$.", "trapTip": "Difference of squares factors cancel nicely."}, {"id": "p5-30", "module": "P.5", "topic": "Domain of Product", "difficulty": "Medium", "questionEn": "What is the domain of the expression $\\frac{x}{x - 1} \\cdot \\frac{x - 1}{x + 2}$ before simplification?", "questionAr": "ما هو مجال المقدار قبل التبسيط؟", "options": ["$\\{x \\mid x \\ne -2\\}$", "$\\{x \\mid x \\ne 1, -2\\}$", "$\\{x \\mid x \\ne 1\\}$", "$\\mathbb{R}$"], "correctIndex": 1, "hint": "Domain restrictions must be determined BEFORE canceling common factors.", "explanation": "Denominators are $x - 1$ and $x + 2$, so $x \\ne 1$ and $x \\ne -2$.", "trapTip": "CRITICAL RULE: The domain of a rational expression is always found from the ORIGINAL unsimplified expression!"}, {"id": "p5-31", "module": "P.5", "topic": "Rational Expression Addition", "difficulty": "Easy", "questionEn": "Simplify: $\\frac{2x - 3}{x + 4} + \\frac{x + 7}{x + 4}$", "questionAr": "بسّط المقدار: $\\frac{2x - 3}{x + 4} + \\frac{x + 7}{x + 4}$", "options": ["$3$", "$\\frac{3x - 10}{x + 4}$", "$\\frac{3x + 4}{x + 4}$", "$\\frac{3x + 4}{2x + 8}$"], "correctIndex": 2, "hint": "Denominators are already identical: add numerators directly.", "explanation": "$(2x - 3) + (x + 7) = 3x + 4$. Result: $\\frac{3x + 4}{x + 4}$.", "trapTip": "Cannot cancel $x + 4$ because 3 is multiplying only $x$, not $(x+4)$!"}, {"id": "p5-32", "module": "P.5", "topic": "Division and Simplification", "difficulty": "Medium", "questionEn": "Divide: $\\frac{x^2 - 4x + 4}{x^2 + 3x} \\div \\frac{x - 2}{x}$", "questionAr": "اقسم وبسّط: $\\frac{x^2 - 4x + 4}{x^2 + 3x} \\div \\frac{x - 2}{x}$", "options": ["$\\frac{x + 2}{x + 3}$", "$\\frac{(x - 2)^2}{x^2(x + 3)}$", "$x - 2$", "$\\frac{x - 2}{x + 3}$"], "correctIndex": 3, "hint": "Multiply by reciprocal: $\\frac{(x - 2)^2}{x(x + 3)} \\cdot \\frac{x}{x - 2}$.", "explanation": "Cancel $(x - 2)$ and $x$: leaves $\\frac{x - 2}{x + 3}$.", "trapTip": "Numerator was $(x - 2)^2$."}, {"id": "p5-33", "module": "P.5", "topic": "Simplifying Complex Expressions", "difficulty": "Hard", "questionEn": "Simplify: $\\frac{\\frac{x}{y} - \\frac{y}{x}}{\\frac{1}{y} + \\frac{1}{x}}$", "questionAr": "بسّط المقدار: $\\frac{\\frac{x}{y} - \\frac{y}{x}}{\\frac{1}{y} + \\frac{1}{x}}$", "options": ["$x - y$", "$y - x$", "$x + y$", "$\\frac{x - y}{xy}$"], "correctIndex": 0, "hint": "Multiply numerator and denominator by $xy$.", "explanation": "Numerator: $x^2 - y^2 = (x - y)(x + y)$. Denominator: $x + y$.\nDividing: $\\frac{(x - y)(x + y)}{x + y} = x - y$.", "trapTip": "$(x + y)$ cancels out."}, {"id": "p5-34", "module": "P.5", "topic": "Adding Three Terms", "difficulty": "Hard", "questionEn": "Simplify: $\\frac{1}{x - 1} - \\frac{2}{x} + \\frac{1}{x + 1}$", "questionAr": "بسّط المقدار: $\\frac{1}{x - 1} - \\frac{2}{x} + \\frac{1}{x + 1}$", "options": ["$0$", "$\\frac{2}{x(x^2 - 1)}$", "$\\frac{-2}{x(x^2 - 1)}$", "$\\frac{2x}{x^2 - 1}$"], "correctIndex": 1, "hint": "LCD is $x(x - 1)(x + 1) = x(x^2 - 1)$.", "explanation": "Numerator: $x(x + 1) - 2(x^2 - 1) + x(x - 1) = (x^2 + x) - (2x^2 - 2) + (x^2 - x) = 2x^2 - 2x^2 + 2 = 2$. Result: $\\frac{2}{x(x^2 - 1)}$.", "trapTip": "Carefully distribute $-2(x^2 - 1) = -2x^2 + 2$."}, {"id": "p5-35", "module": "P.5", "topic": "Domain with Square Root", "difficulty": "Medium", "questionEn": "Find the domain of $h(x) = \\sqrt{\\frac{x - 1}{x + 3}}$.", "questionAr": "أوجد مجال الدالة: $h(x) = \\sqrt{\\frac{x - 1}{x + 3}}$.", "options": ["$[-3, 1]$", "$(-3, 1]$", "$(-\\infty, -3) \\cup [1, \\infty)$", "$(-3, \\infty)$"], "correctIndex": 2, "hint": "The fraction must be non-negative: $\\frac{x - 1}{x + 3} \\ge 0$, and denominator $x + 3 \\ne 0$.", "explanation": "Sign chart: test intervals $(-\\infty, -3)$, $(-3, 1)$, $(1, \\infty)$. Positive on $(-\\infty, -3)$ and $[1, \\infty)$. Note $x = -3$ is excluded.", "trapTip": "$-3$ must have an open parenthesis because it makes denominator zero!"}, {"id": "p5-36", "module": "P.5", "topic": "Simplifying Rational with Difference of Cubes", "difficulty": "Hard", "questionEn": "Simplify: $\\frac{x^3 - 27}{2x - 6}$", "questionAr": "بسّط المقدار: $\\frac{x^3 - 27}{2x - 6}$", "options": ["$\\frac{x^2 - 3x + 9}{2}$", "$\\frac{(x - 3)^2}{2}$", "$x^2 + 3x + 9$", "$\\frac{x^2 + 3x + 9}{2}$"], "correctIndex": 3, "hint": "Factor numerator: $(x - 3)(x^2 + 3x + 9)$. Factor denominator: $2(x - 3)$.", "explanation": "Cancel $(x - 3)$ to get $\\frac{x^2 + 3x + 9}{2}$.", "trapTip": "Do not lose the denominator factor 2."}, {"id": "p5-37", "module": "P.5", "topic": "Rational Subtraction Common Mistakes", "difficulty": "Medium", "questionEn": "Subtract: $\\frac{3x + 2}{x - 5} - \\frac{x - 8}{x - 5}$", "questionAr": "اطرح المقدارين: $\\frac{3x + 2}{x - 5} - \\frac{x - 8}{x - 5}$", "options": ["$\\frac{2x + 10}{x - 5}$", "$\\frac{2x - 6}{x - 5}$", "$2$", "$\\frac{2x + 10}{2x - 10}$"], "correctIndex": 0, "hint": "Distribute the minus sign to the entire second numerator: $-(x - 8) = -x + 8$.", "explanation": "$(3x + 2) - (x - 8) = 3x + 2 - x + 8 = 2x + 10$.", "trapTip": "Subtracting $-8$ gives $+8$, so $2 + 8 = 10$, NOT $-6$!"}, {"id": "p5-38", "module": "P.5", "topic": "Complex Fraction Simplification", "difficulty": "Medium", "questionEn": "Simplify: $\\frac{\\frac{2}{x}}{1 - \\frac{4}{x^2}}$", "questionAr": "بسّط الكسر المركب: $\\frac{\\frac{2}{x}}{1 - \\frac{4}{x^2}}$", "options": ["$\\frac{2}{x^2 - 4}$", "$\\frac{2x}{x^2 - 4}$", "$\\frac{2x}{x - 2}$", "$\\frac{x}{x^2 - 4}$"], "correctIndex": 1, "hint": "Multiply numerator and denominator by $x^2$.", "explanation": "Numerator: $\\frac{2}{x} \\cdot x^2 = 2x$. Denominator: $(1 - 4/x^2)x^2 = x^2 - 4$. Result: $\\frac{2x}{x^2 - 4}$.", "trapTip": "Multiplying by the overall LCD $x^2$ is the most direct method."}, {"id": "p5-39", "module": "P.5", "topic": "Domain Restrictions", "difficulty": "Easy", "questionEn": "Find all restrictions on the variable for $\\frac{x + 3}{(x - 4)(x + 2)}$.", "questionAr": "أوجد جميع القيود على المتغير للمقدار $\\frac{x + 3}{(x - 4)(x + 2)}$.", "options": ["$x \\ne -3$", "$x \\ne 4$", "$x \\ne 4 \\text{ and } x \\ne -2$", "$x \\ne -4 \\text{ and } x \\ne 2$"], "correctIndex": 2, "hint": "Restrictions are values where the denominator is zero.", "explanation": "$(x - 4)(x + 2) = 0 \\implies x = 4, -2$. Thus $x \\ne 4$ and $x \\ne -2$.", "trapTip": "The numerator restriction $x \\ne -3$ is NOT a domain restriction."}, {"id": "p5-40", "module": "P.5", "topic": "Reciprocal of Sum", "difficulty": "Medium", "questionEn": "Is $\\frac{1}{a + b}$ equal to $\\frac{1}{a} + \\frac{1}{b}$?", "questionAr": "هل المقدار $\\frac{1}{a + b}$ يساوي $\\frac{1}{a} + \\frac{1}{b}$؟", "options": ["$\\text{Yes, by the distributive property.}$", "$\\text{Yes, only when } a = b.$", "$\\text{Yes, always.}$", "$\\text{No, they are never identically equal for all real numbers.}$"], "correctIndex": 3, "hint": "$\\frac{1}{a} + \\frac{1}{b} = \\frac{a+b}{ab} \\ne \\frac{1}{a+b}$.", "explanation": "For example, let $a = 1, b = 1$: $\\frac{1}{1+1} = \\frac{1}{2}$, but $\\frac{1}{1} + \\frac{1}{1} = 2$.", "trapTip": "One of the most famous algebra traps! Addition in denominators does not distribute."}, {"id": "p6-01", "module": "P.6", "topic": "Quadrants", "difficulty": "Easy", "questionEn": "In which quadrant does the point $(-4, 7)$ lie?", "questionAr": "في أي ربع تقع النقطة $(-4, 7)$؟", "options": ["Quadrant II", "Quadrant I", "Quadrant III", "Quadrant IV"], "correctIndex": 0, "hint": "Check signs: Quadrant I $(+,+)$, Quadrant II $(-,+)$, Quadrant III $(-,-)$, Quadrant IV $(+,-)$.", "explanation": "The $x$-coordinate is negative ($-4 < 0$) and the $y$-coordinate is positive ($7 > 0$), so the point lies in Quadrant II.", "trapTip": "Remember $x$ comes first, then $y$: $(x, y)$."}, {"id": "p6-02", "module": "P.6", "topic": "Coordinate Signs", "difficulty": "Medium", "questionEn": "If $xy > 0$ and $x + y < 0$, in which quadrant does the point $(x, y)$ lie?", "questionAr": "إذا كان $xy > 0$ و $x + y < 0$ ، ففي أي ربع تقع النقطة $(x, y)$؟", "options": ["Quadrant I", "Quadrant III", "Quadrant II", "Quadrant IV"], "correctIndex": 1, "hint": "$xy > 0$ means $x$ and $y$ have the same sign. What does their sum tell you?", "explanation": "Since $xy > 0$, both are positive or both are negative. Because $x + y < 0$, both must be negative. Thus, $(x, y)$ lies in Quadrant III.", "trapTip": "Same sign could be Quad I or Quad III, but negative sum forces Quad III."}, {"id": "p6-03", "module": "P.6", "topic": "Distance Formula", "difficulty": "Easy", "questionEn": "Find the distance between the points $A(-2, 3)$ and $B(4, -5)$.", "questionAr": "أوجد المسافة بين النقطتين $A(-2, 3)$ و $B(4, -5)$.", "options": ["$14$", "$2\\sqrt{7}$", "$10$", "$8$"], "correctIndex": 2, "hint": "Use distance formula: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.", "explanation": "$d = \\sqrt{(4 - (-2))^2 + (-5 - 3)^2} = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.", "trapTip": "$4 - (-2) = 6$, and $(-8)^2 = +64$."}, {"id": "p6-04", "module": "P.6", "topic": "Midpoint Formula", "difficulty": "Easy", "questionEn": "Find the midpoint of the line segment connecting $P(3, -7)$ and $Q(-5, 11)$.", "questionAr": "أوجد نقطة منتصف القطعة المستقيمة الواصلة بين $P(3, -7)$ و $Q(-5, 11)$.", "options": ["$(4, -9)$", "$(-1, 9)$", "$(1, -2)$", "$(-1, 2)$"], "correctIndex": 3, "hint": "Midpoint formula: $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$.", "explanation": "$M = \\left(\\frac{3 + (-5)}{2}, \\frac{-7 + 11}{2}\\right) = \\left(\\frac{-2}{2}, \\frac{4}{2}\\right) = (-1, 2)$.", "trapTip": "Midpoint is the average of coordinates: ADD, do not subtract!"}, {"id": "p6-05", "module": "P.6", "topic": "Finding Endpoint", "difficulty": "Medium", "questionEn": "If $M(2, -1)$ is the midpoint of segment $AB$ and $A(-4, 5)$, find the coordinates of $B$.", "questionAr": "إذا كانت $M(2, -1)$ هي نقطة منتصف القطعة $AB$ وكانت $A(-4, 5)$ ، فما هي إحداثيات النقطة $B$؟", "options": ["$(8, -7)$", "$(-1, 2)$", "$(0, 4)$", "$(6, -6)$"], "correctIndex": 0, "hint": "Use $x_B = 2x_M - x_A$ and $y_B = 2y_M - y_A$.", "explanation": "$x_B = 2(2) - (-4) = 4 + 4 = 8$.\n$y_B = 2(-1) - 5 = -2 - 5 = -7$.\nThus, $B(8, -7)$.", "trapTip": "Don't average $M$ and $A$; $M$ is in the middle!"}, {"id": "p6-06", "module": "P.6", "topic": "Standard Equation of Circle", "difficulty": "Easy", "questionEn": "Find the center and radius of the circle: $(x + 3)^2 + (y - 5)^2 = 49$", "questionAr": "أوجد مركز ونصف قطر الدائرة: $(x + 3)^2 + (y - 5)^2 = 49$", "options": ["$\\text{Center } (3, -5), \\text{ Radius } 7$", "$\\text{Center } (-3, 5), \\text{ Radius } 7$", "$\\text{Center } (-3, 5), \\text{ Radius } 49$", "$\\text{Center } (3, -5), \\text{ Radius } 49$"], "correctIndex": 1, "hint": "Standard form: $(x - h)^2 + (y - k)^2 = r^2$.", "explanation": "Center is $(h, k) = (-3, 5)$. Radius is $r = \\sqrt{49} = 7$.", "trapTip": "Notice the opposite signs: $(x + 3)$ gives $h = -3$ and $(y - 5)$ gives $k = 5$."}, {"id": "p6-07", "module": "P.6", "topic": "Writing Circle Equation", "difficulty": "Easy", "questionEn": "Write the standard equation of the circle with center $(0, -4)$ and radius $3\\sqrt{2}$.", "questionAr": "اكتب المعادلة القياسية للدائرة التي مركزها $(0, -4)$ ونصف قطرها $3\\sqrt{2}$.", "options": ["$x^2 + (y - 4)^2 = 18$", "$x^2 + (y + 4)^2 = 6$", "$x^2 + (y + 4)^2 = 18$", "$(x - 4)^2 + y^2 = 18$"], "correctIndex": 2, "hint": "$(x - 0)^2 + (y - (-4))^2 = r^2$.", "explanation": "$x^2 + (y + 4)^2 = (3\\sqrt{2})^2 = 9 \\times 2 = 18$.", "trapTip": "$(3\\sqrt{2})^2 = 9 \\times 2 = 18$, not 6 or 12."}, {"id": "p6-08", "module": "P.6", "topic": "Diameter Endpoints Circle", "difficulty": "Medium", "questionEn": "The endpoints of a diameter of a circle are $A(-1, 2)$ and $B(5, 6)$. Find the standard equation of the circle.", "questionAr": "نهايتا قطر في دائرة هما $A(-1, 2)$ و $B(5, 6)$. أوجد المعادلة القياسية للدائرة.", "options": ["$(x - 2)^2 + (y - 4)^2 = 52$", "$(x + 2)^2 + (y + 4)^2 = 13$", "$(x - 4)^2 + (y - 2)^2 = 13$", "$(x - 2)^2 + (y - 4)^2 = 13$"], "correctIndex": 3, "hint": "Center is the midpoint of the diameter, and radius is half the diameter.", "explanation": "Center: $M = \\left(\\frac{-1+5}{2}, \\frac{2+6}{2}\\right) = (2, 4)$.\nRadius squared: $r^2 = (2 - (-1))^2 + (4 - 2)^2 = 3^2 + 2^2 = 9 + 4 = 13$.\nEquation: $(x - 2)^2 + (y - 4)^2 = 13$.", "trapTip": "The full diameter length squared is $6^2 + 4^2 = 52$, so $r^2 = 52 / 4 = 13$."}, {"id": "p6-09", "module": "P.6", "topic": "General to Standard Circle", "difficulty": "Medium", "questionEn": "Find the center and radius of the circle given by: $x^2 + y^2 - 6x + 8y = 0$", "questionAr": "أوجد مركز ونصف قطر الدائرة: $x^2 + y^2 - 6x + 8y = 0$", "options": ["$\\text{Center } (3, -4), \\text{ Radius } 5$", "$\\text{Center } (-3, 4), \\text{ Radius } 5$", "$\\text{Center } (3, -4), \\text{ Radius } 25$", "$\\text{Center } (-6, 8), \\text{ Radius } 10$"], "correctIndex": 0, "hint": "Complete the square for both $x$ and $y$.", "explanation": "$(x^2 - 6x + 9) + (y^2 + 8y + 16) = 0 + 9 + 16 = 25$.\n$(x - 3)^2 + (y + 4)^2 = 25$.\nCenter is $(3, -4)$ and radius is $r = \\sqrt{25} = 5$.", "trapTip": "Add $(b/2)^2$ to BOTH sides of the equation!"}, {"id": "p6-10", "module": "P.6", "topic": "Degenerate Circle", "difficulty": "Medium", "questionEn": "What does the equation $x^2 + y^2 + 4x - 2y + 5 = 0$ represent in the Cartesian plane?", "questionAr": "ماذا تمثل المعادلة $x^2 + y^2 + 4x - 2y + 5 = 0$ في المستوى الديكارتي؟", "options": ["$A circle of radius 5$", "A single point (-2, 1)", "An empty set (no graph)", "$A circle of radius 1$"], "correctIndex": 1, "hint": "Complete the square to find $r^2$.", "explanation": "$(x^2 + 4x + 4) + (y^2 - 2y + 1) = -5 + 4 + 1 = 0$.\n$(x + 2)^2 + (y - 1)^2 = 0$.\nSince sum of squares equals 0, the only real solution is $x = -2, y = 1$, which is the point $(-2, 1)$.", "trapTip": "When $r^2 = 0$, the equation represents a point (degenerate circle)."}, {"id": "p6-11", "module": "P.6", "topic": "No Graph Circle", "difficulty": "Medium", "questionEn": "What does the equation $x^2 + y^2 - 2x + 6y + 15 = 0$ represent?", "questionAr": "ماذا تمثل المعادلة $x^2 + y^2 - 2x + 6y + 15 = 0$؟", "options": ["$A circle of radius \\sqrt{5}$", "$A point (1, -3)$", "$The empty set (No real graph)$", "$A circle of radius 5$"], "correctIndex": 2, "hint": "Complete the square and inspect the right-hand side.", "explanation": "$(x - 1)^2 + (y + 3)^2 = -15 + 1 + 9 = -5$.\nA sum of squares of real numbers cannot be negative ($-5 < 0$). Thus, there are no real solutions.", "trapTip": "When $r^2 < 0$, the graph has no points in the real coordinate plane."}, {"id": "p6-12", "module": "P.6", "topic": "Circle Intercepts", "difficulty": "Hard", "questionEn": "Find the $x$-intercepts of the circle: $(x - 1)^2 + (y + 2)^2 = 13$", "questionAr": "أوجد نقاط التقاطع مع محور السينات ($x$-intercepts) للدائرة: $(x - 1)^2 + (y + 2)^2 = 13$", "options": ["$(3, 0) \\text{ and } (-3, 0)$", "$(1, 0) \\text{ and } (-2, 0)$", "$(0, 4) \\text{ and } (0, -2)$", "$(4, 0) \\text{ and } (-2, 0)$"], "correctIndex": 3, "hint": "To find $x$-intercepts, set $y = 0$ and solve for $x$.", "explanation": "$(x - 1)^2 + (0 + 2)^2 = 13 \\implies (x - 1)^2 + 4 = 13 \\implies (x - 1)^2 = 9$.\n$x - 1 = \\pm 3 \\implies x = 4$ or $x = -2$.\nIntercepts: $(4, 0)$ and $(-2, 0)$.", "trapTip": "Remember $x$-intercepts have $y = 0$."}, {"id": "p6-13", "module": "P.6", "topic": "Right Triangle Verification", "difficulty": "Medium", "questionEn": "Do the points $A(1, 1)$, $B(4, 5)$, and $C(1, 5)$ form a right triangle?", "questionAr": "هل تشكل النقاط $A(1, 1)$ و $B(4, 5)$ و $C(1, 5)$ مثلثاً قائم الزاوية؟", "options": ["Yes, right-angled at C", "Yes, right-angled at A", "Yes, right-angled at B", "No, it is not a right triangle"], "correctIndex": 0, "hint": "Compute distance squared between each pair of vertices.", "explanation": "$AB^2 = (4-1)^2 + (5-1)^2 = 9 + 16 = 25$.\n$AC^2 = (1-1)^2 + (5-1)^2 = 0 + 16 = 16$.\n$BC^2 = (4-1)^2 + (5-5)^2 = 9 + 0 = 9$.\nSince $AC^2 + BC^2 = 16 + 9 = 25 = AB^2$, it is a right triangle with right angle at $C$.", "trapTip": "Notice $AC$ is vertical ($x=1$) and $BC$ is horizontal ($y=5$), perpendicular at $C(1,5)$."}, {"id": "p6-14", "module": "P.6", "topic": "Points on Coordinate Axes", "difficulty": "Easy", "questionEn": "Any point that lies on the $y$-axis has an $x$-coordinate of:", "questionAr": "أي نقطة تقع على محور الصادات ($y$-axis) يكون إحداثيها السيني ($x$) مساوياً لـ:", "options": ["$1$", "$0$", "$-1$", "$\\text{Any non-zero real number}$"], "correctIndex": 1, "hint": "Points on the $y$-axis have coordinates $(0, y)$.", "explanation": "Every point on the $y$-axis satisfies $x = 0$.", "trapTip": "Do not confuse the $x$-axis ($y=0$) with the $y$-axis ($x=0$)."}, {"id": "p6-15", "module": "P.6", "topic": "Signs of Coordinates", "difficulty": "Easy", "questionEn": "If a point lies in Quadrant IV, what are the signs of its coordinates $(x, y)$?", "questionAr": "إذا كانت نقطة تقع في الربع الرابع، فما هي إشارات إحداثياتها $(x, y)$؟", "options": ["$x < 0, y > 0$", "$x < 0, y < 0$", "$x > 0, y < 0$", "$x > 0, y > 0$"], "correctIndex": 2, "hint": "Quadrant IV is lower-right: right is positive $x$, down is negative $y$.", "explanation": "In Quadrant IV, $x > 0$ and $y < 0$.", "trapTip": "Quadrant II is $(-, +)$ while Quadrant IV is $(+, -)$."}, {"id": "p6-16", "module": "P.6", "topic": "Circle with General Coefficients", "difficulty": "Hard", "questionEn": "Find the radius of the circle: $2x^2 + 2y^2 - 8x + 12y - 6 = 0$", "questionAr": "أوجد نصف قطر الدائرة: $2x^2 + 2y^2 - 8x + 12y - 6 = 0$", "options": ["$16$", "$\\sqrt{6}$", "$2\\sqrt{3}$", "$4$"], "correctIndex": 3, "hint": "Divide the entire equation by 2 first so that coefficients of $x^2$ and $y^2$ are 1!", "explanation": "Divide by 2: $x^2 + y^2 - 4x + 6y - 3 = 0$.\nComplete squares: $(x - 2)^2 + (y + 3)^2 = 3 + 4 + 9 = 16$.\nRadius is $r = \\sqrt{16} = 4$.", "trapTip": "CRITICAL STEP: You must divide by the leading coefficient 2 before completing the square!"}, {"id": "p6-17", "module": "P.6", "topic": "Collinear Points", "difficulty": "Medium", "questionEn": "Are the points $P(-1, -3)$, $Q(1, 1)$, and $R(3, 5)$ collinear?", "questionAr": "هل النقاط $P(-1, -3)$ و $Q(1, 1)$ و $R(3, 5)$ تقع على استقامة واحدة (Collinear)؟", "options": ["Yes, PQ + QR = PR", "No, they form a triangle", "Yes, because all coordinates are odd", "No, because the slopes differ"], "correctIndex": 0, "hint": "Check distances: $d(P, Q) = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}$, $d(Q, R) = \\sqrt{4 + 16} = 2\\sqrt{5}$, $d(P, R) = \\sqrt{16 + 64} = \\sqrt{80} = 4\\sqrt{5}$.", "explanation": "Since $2\\sqrt{5} + 2\\sqrt{5} = 4\\sqrt{5}$, $PQ + QR = PR$, the points are collinear.", "trapTip": "Alternatively, slopes are equal: $\\frac{1 - (-3)}{1 - (-1)} = \\frac{4}{2} = 2$ and $\\frac{5 - 1}{3 - 1} = \\frac{4}{2} = 2$."}, {"id": "p6-18", "module": "P.6", "topic": "Circle Tangent to Axis", "difficulty": "Hard", "questionEn": "A circle has center $(4, -3)$ and is tangent to the $x$-axis. What is its equation?", "questionAr": "دائرة مركزها $(4, -3)$ ومماسة لمحور السينات ($x$-axis). ما هي معادلتها القياسية؟", "options": ["$(x - 4)^2 + (y + 3)^2 = 16$", "$(x - 4)^2 + (y + 3)^2 = 9$", "$(x + 4)^2 + (y - 3)^2 = 9$", "$(x - 4)^2 + (y + 3)^2 = 25$"], "correctIndex": 1, "hint": "The distance from the center $(4, -3)$ to the $x$-axis is $|k| = |-3| = 3$.", "explanation": "Since the circle is tangent to the $x$-axis, $r = |-3| = 3$, so $r^2 = 9$.\nEquation: $(x - 4)^2 + (y + 3)^2 = 9$.", "trapTip": "Tangent to $x$-axis means radius is $|y_{\\text{center}}|$, NOT $|x_{\\text{center}}|$!"}, {"id": "p6-19", "module": "P.6", "topic": "Circle Tangent to y-axis", "difficulty": "Hard", "questionEn": "A circle has center $(-5, 2)$ and is tangent to the $y$-axis. What is its equation?", "questionAr": "دائرة مركزها $(-5, 2)$ ومماسة لمحور الصادات ($y$-axis). ما هي معادلتها القياسية؟", "options": ["$(x + 5)^2 + (y - 2)^2 = 4$", "$(x - 5)^2 + (y + 2)^2 = 25$", "$(x + 5)^2 + (y - 2)^2 = 25$", "$(x + 5)^2 + (y - 2)^2 = 29$"], "correctIndex": 2, "hint": "The distance from $(-5, 2)$ to the $y$-axis is $|h| = |-5| = 5$.", "explanation": "Radius is $r = 5$, so $r^2 = 25$.\nEquation: $(x - (-5))^2 + (y - 2)^2 = 25 \\implies (x + 5)^2 + (y - 2)^2 = 25$.", "trapTip": "Tangent to $y$-axis means radius is $|x_{\\text{center}}| = 5$."}, {"id": "p6-20", "module": "P.6", "topic": "Circle Passing Through Point", "difficulty": "Medium", "questionEn": "Find the equation of the circle with center $(1, -2)$ that passes through the point $(4, 2)$.", "questionAr": "أوجد معادلة الدائرة التي مركزها $(1, -2)$ وتمر بالنقطة $(4, 2)$.", "options": ["$(x - 1)^2 + (y + 2)^2 = 5$", "$(x + 1)^2 + (y - 2)^2 = 25$", "$(x - 4)^2 + (y - 2)^2 = 25$", "$(x - 1)^2 + (y + 2)^2 = 25$"], "correctIndex": 3, "hint": "Radius is the distance between center $(1, -2)$ and point on circle $(4, 2)$.", "explanation": "$r^2 = (4 - 1)^2 + (2 - (-2))^2 = 3^2 + 4^2 = 9 + 16 = 25$.\nEquation: $(x - 1)^2 + (y + 2)^2 = 25$.", "trapTip": "$r^2 = 25$, so write 25 on the right-hand side, not $\\sqrt{25}=5$."}, {"id": "p6-21", "module": "P.6", "topic": "Distance from Origin", "difficulty": "Easy", "questionEn": "What is the distance from the point $(-6, 8)$ to the origin $(0, 0)$?", "questionAr": "ما هي مسافة النقطة $(-6, 8)$ عن نقطة الأصل $(0, 0)$؟", "options": ["$10$", "$14$", "$2$", "$48$"], "correctIndex": 0, "hint": "Use $d = \\sqrt{x^2 + y^2}$.", "explanation": "$d = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.", "trapTip": "The 6-8-10 Pythagorean triple."}, {"id": "p6-22", "module": "P.6", "topic": "Circle Center on Origin", "difficulty": "Easy", "questionEn": "What is the equation of the circle centered at the origin with area $36\\pi$?", "questionAr": "ما هي معادلة الدائرة التي مركزها نقطة الأصل ومساحتها $36\\pi$؟", "options": ["$x^2 + y^2 = 6$", "$x^2 + y^2 = 36$", "$x^2 + y^2 = 12$", "$(x - 6)^2 + (y - 6)^2 = 36$"], "correctIndex": 1, "hint": "Area of circle is $A = \\pi r^2 = 36\\pi \\implies r^2 = 36$.", "explanation": "Center is $(0, 0)$, so $(x - 0)^2 + (y - 0)^2 = r^2 \\implies x^2 + y^2 = 36$.", "trapTip": "Equation uses $r^2$, which is directly 36."}, {"id": "p6-23", "module": "P.6", "topic": "Isosceles Triangle", "difficulty": "Medium", "questionEn": "The triangle with vertices $A(0, 0)$, $B(4, 0)$, and $C(2, 3)$ is:", "questionAr": "المثلث الذي رؤوسه $A(0, 0)$ و $B(4, 0)$ و $C(2, 3)$ هو مثلث:", "options": ["Equilateral (متطابق الأضلاع)", "Scalene (مختلف الأضلاع)", "Isosceles (متطابق الضلعين)", "Right-angled (قائم الزاوية)"], "correctIndex": 2, "hint": "Compute the lengths of the three sides.", "explanation": "$AB = 4$.\n$AC = \\sqrt{(2-0)^2 + (3-0)^2} = \\sqrt{4 + 9} = \\sqrt{13}$.\n$BC = \\sqrt{(2-4)^2 + (3-0)^2} = \\sqrt{4 + 9} = \\sqrt{13}$.\nSince $AC = BC = \\sqrt{13} \\ne AB$, it is isosceles.", "trapTip": "Two equal sides define an isosceles triangle."}, {"id": "p6-24", "module": "P.6", "topic": "Circle y-intercepts", "difficulty": "Hard", "questionEn": "Find the $y$-intercepts of the circle $x^2 + y^2 - 4x - 6y + 9 = 0$.", "questionAr": "أوجد نقاط التقاطع مع محور الصادات للدائرة: $x^2 + y^2 - 4x - 6y + 9 = 0$.", "options": ["$(0, 3) \\text{ and } (0, -3)$", "$(0, 0) \\text{ and } (0, 6)$", "$\\text{No } y\\text{-intercepts}$", "$(0, 3) \\text{ only (tangent to } y\\text{-axis)}$"], "correctIndex": 3, "hint": "Set $x = 0$ in the circle equation.", "explanation": "$0 + y^2 - 0 - 6y + 9 = 0 \\implies (y - 3)^2 = 0 \\implies y = 3$.\nThere is exactly one $y$-intercept at $(0, 3)$, meaning the circle is tangent to the $y$-axis.", "trapTip": "A repeated root means the circle touches the axis at a single point (tangent)!"}, {"id": "p6-25", "module": "P.6", "topic": "Coordinate Geometry Quadrant", "difficulty": "Easy", "questionEn": "If $a > 0$ and $b < 0$, in which quadrant does $(-a, -b)$ lie?", "questionAr": "إذا كان $a > 0$ و $b < 0$ ، ففي أي ربع تقع النقطة $(-a, -b)$؟", "options": ["Quadrant II", "Quadrant I", "Quadrant III", "Quadrant IV"], "correctIndex": 0, "hint": "Determine the signs of the coordinates: $-a$ and $-b$.", "explanation": "Since $a > 0$, $-a < 0$ (negative).\nSince $b < 0$, $-b > 0$ (positive).\nCoordinates $(-a, -b)$ are $(-, +)$, which is Quadrant II.", "trapTip": "Carefully negate: negative of a negative number is positive!"}, {"id": "p6-26", "module": "P.6", "topic": "Distance Formula with Unknown", "difficulty": "Medium", "questionEn": "The distance between $(x, 2)$ and $(1, -2)$ is 5. What are the possible values of $x$?", "questionAr": "المسافة بين النقطتين $(x, 2)$ و $(1, -2)$ تساوي 5. ما هي القيم الممكنة لـ $x$؟", "options": ["$4 and 2$", "$4 and -2$", "$-4 and 2$", "$3 and -3$"], "correctIndex": 1, "hint": "Set up the distance equation: $\\sqrt{(x - 1)^2 + (2 - (-2))^2} = 5$.", "explanation": "$(x - 1)^2 + 4^2 = 5^2 \\implies (x - 1)^2 + 16 = 25 \\implies (x - 1)^2 = 9$.\n$x - 1 = \\pm 3 \\implies x = 4$ or $x = -2$.", "trapTip": "3-4-5 triangle sides: $|x - 1| = 3$."}, {"id": "p6-27", "module": "P.6", "topic": "Circle Radius from Equation", "difficulty": "Easy", "questionEn": "What is the radius of the circle $(x - 5)^2 + (y + 1)^2 = 12$?", "questionAr": "ما هو نصف قطر الدائرة: $(x - 5)^2 + (y + 1)^2 = 12$؟", "options": ["$12$", "$6$", "$2\\sqrt{3}$", "$3\\sqrt{2}$"], "correctIndex": 2, "hint": "Radius is $\\sqrt{12}$. Simplify the radical.", "explanation": "$r = \\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$.", "trapTip": "Do not leave $\\sqrt{12}$ unsimplified; $2\\sqrt{3}$ is the standard simplified form."}, {"id": "p6-28", "module": "P.6", "topic": "Midpoint Application", "difficulty": "Medium", "questionEn": "Find the coordinates of the center of a circle whose diameter has endpoints $(-3, 8)$ and $(5, -2)$.", "questionAr": "أوجد إحداثيات مركز دائرة إذا كانت نهايتا أحد أقطارها هما $(-3, 8)$ و $(5, -2)$.", "options": ["$(2, 6)$", "$(-1, 3)$", "$(4, 5)$", "$(1, 3)$"], "correctIndex": 3, "hint": "The center of any circle is the midpoint of any of its diameters.", "explanation": "$M = \\left(\\frac{-3 + 5}{2}, \\frac{8 + (-2)}{2}\\right) = \\left(\\frac{2}{2}, \\frac{6}{2}\\right) = (1, 3)$.", "trapTip": "Center is the midpoint of the diameter."}, {"id": "p6-29", "module": "P.6", "topic": "Completing the Square Circle", "difficulty": "Medium", "questionEn": "Write $x^2 + y^2 + 2x - 4y - 11 = 0$ in standard form.", "questionAr": "اكتب معادلة الدائرة $x^2 + y^2 + 2x - 4y - 11 = 0$ بالصيغة القياسية.", "options": ["$(x + 1)^2 + (y - 2)^2 = 16$", "$(x + 1)^2 + (y - 2)^2 = 11$", "$(x - 1)^2 + (y + 2)^2 = 16$", "$(x + 2)^2 + (y - 4)^2 = 16$"], "correctIndex": 0, "hint": "Complete squares: $(x^2 + 2x + 1) + (y^2 - 4y + 4) = 11 + 1 + 4$.", "explanation": "$(x + 1)^2 + (y - 2)^2 = 16$.", "trapTip": "Add $1$ and $4$ to the right-hand side: $11 + 1 + 4 = 16$."}, {"id": "p6-30", "module": "P.6", "topic": "Circle Area", "difficulty": "Easy", "questionEn": "What is the area of the circle with equation $(x + 2)^2 + (y - 7)^2 = 25$?", "questionAr": "ما هي مساحة الدائرة التي معادلتها $(x + 2)^2 + (y - 7)^2 = 25$؟", "options": ["$5\\pi$", "$25\\pi$", "$50\\pi$", "$10\\pi$"], "correctIndex": 1, "hint": "Area formula: $A = \\pi r^2$.", "explanation": "From the equation, $r^2 = 25$. Therefore, $\\text{Area} = 25\\pi$.", "trapTip": "The right-hand side is ALREADY $r^2$, so simply multiply by $\\pi$."}, {"id": "p6-31", "module": "P.6", "topic": "Circle Circumference", "difficulty": "Easy", "questionEn": "What is the circumference of the circle $x^2 + y^2 = 49$?", "questionAr": "ما هو محيط الدائرة التي معادلتها $x^2 + y^2 = 49$؟", "options": ["$49\\pi$", "$7\\pi$", "$14\\pi$", "$28\\pi$"], "correctIndex": 2, "hint": "Circumference formula: $C = 2\\pi r$.", "explanation": "$r^2 = 49 \\implies r = 7$. Circumference is $2\\pi(7) = 14\\pi$.", "trapTip": "Circumference is $2\\pi r$, not $\\pi r^2$!"}, {"id": "p6-32", "module": "P.6", "topic": "Quadrant Identification", "difficulty": "Easy", "questionEn": "The point $(0, -5)$ lies on:", "questionAr": "النقطة $(0, -5)$ تقع على:", "options": ["Quadrant III", "Quadrant IV", "The negative x-axis", "The negative y-axis"], "correctIndex": 3, "hint": "A point with $x = 0$ lies on the $y$-axis, not in any quadrant.", "explanation": "Because $y = -5 < 0$, it lies on the negative $y$-axis.", "trapTip": "Points on coordinate axes do not belong to any quadrant!"}, {"id": "p6-33", "module": "P.6", "topic": "Distance between Horizontal Points", "difficulty": "Easy", "questionEn": "Find the distance between $(-7, 4)$ and $(5, 4)$.", "questionAr": "أوجد المسافة بين النقطتين $(-7, 4)$ و $(5, 4)$.", "options": ["$12$", "$-12$", "$2$", "$8$"], "correctIndex": 0, "hint": "Since the $y$-coordinates are identical ($y = 4$), the distance is simply $|x_2 - x_1|$.", "explanation": "$d = |5 - (-7)| = |12| = 12$.", "trapTip": "No need for square root formula when points share the same horizontal line."}, {"id": "p6-34", "module": "P.6", "topic": "Distance between Vertical Points", "difficulty": "Easy", "questionEn": "Find the distance between $(3, -9)$ and $(3, 11)$.", "questionAr": "أوجد المسافة بين النقطتين $(3, -9)$ و $(3, 11)$.", "options": ["$2$", "$20$", "$-20$", "$14$"], "correctIndex": 1, "hint": "Since the $x$-coordinates are identical ($x = 3$), $d = |y_2 - y_1|$.", "explanation": "$d = |11 - (-9)| = |20| = 20$.", "trapTip": "Points on a vertical line have distance $|y_2 - y_1|$."}, {"id": "p6-35", "module": "P.6", "topic": "Circle Point Inside Outside", "difficulty": "Medium", "questionEn": "Where does the point $(3, 4)$ lie relative to the circle $x^2 + y^2 = 16$?", "questionAr": "أين تقع النقطة $(3, 4)$ بالنسبة للدائرة $x^2 + y^2 = 16$؟", "options": ["On the circle", "Inside the circle", "Outside the circle", "At the center"], "correctIndex": 2, "hint": "Plug the point's coordinates into $x^2 + y^2$ and compare with $r^2 = 16$.", "explanation": "$3^2 + 4^2 = 9 + 16 = 25$. Since $25 > 16$, the point lies outside the circle.", "trapTip": "If value $< r^2$ inside; $= r^2$ on circle; $> r^2$ outside."}, {"id": "p6-36", "module": "P.6", "topic": "Circle Point Inside Outside", "difficulty": "Easy", "questionEn": "Where does the point $(1, 1)$ lie relative to the circle $x^2 + y^2 = 9$?", "questionAr": "أين تقع النقطة $(1, 1)$ بالنسبة للدائرة $x^2 + y^2 = 9$؟", "options": ["On the circle", "Outside the circle", "At the center", "Inside the circle"], "correctIndex": 3, "hint": "Evaluate $1^2 + 1^2 = 2$.", "explanation": "Since $2 < 9$, the distance from center is less than radius: inside the circle.", "trapTip": "$2 < 9$ confirms it is strictly inside."}, {"id": "p6-37", "module": "P.6", "topic": "General Circle Center Formula", "difficulty": "Medium", "questionEn": "For the circle $x^2 + y^2 + Dx + Ey + F = 0$, what is the formula for the center $(h, k)$?", "questionAr": "للدائرة $x^2 + y^2 + Dx + Ey + F = 0$ ، ما هو القانون المباشر لإحداثيات المركز $(h, k)$؟", "options": ["$\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$", "$\\left(\\frac{D}{2}, \\frac{E}{2}\\right)$", "$(-D, -E)$", "$\\left(-\\frac{D}{4}, -\\frac{E}{4}\\right)$"], "correctIndex": 0, "hint": "Completing the square gives $(x + D/2)^2 + (y + E/2)^2 = \\dots$", "explanation": "The center is $(h, k) = (-D/2, -E/2)$.", "trapTip": "Remember to divide by 2 AND negate the signs!"}, {"id": "p6-38", "module": "P.6", "topic": "Symmetry of Circle", "difficulty": "Easy", "questionEn": "The circle $(x - 3)^2 + y^2 = 25$ is symmetric with respect to which line?", "questionAr": "الدائرة $(x - 3)^2 + y^2 = 25$ متماثلة حول أي خط؟", "options": ["The y-axis (x = 0)", "The x-axis (y = 0)", "The line y = 3", "The line y = x"], "correctIndex": 1, "hint": "Replacing $y$ with $-y$ leaves the equation unchanged: $(-y)^2 = y^2$.", "explanation": "Since replacing $y$ with $-y$ yields an identical equation, the graph is symmetric with respect to the $x$-axis.", "trapTip": "Center is $(3, 0)$, which lies on the $x$-axis, so the horizontal diameter lies on the $x$-axis."}, {"id": "p6-39", "module": "P.6", "topic": "Circle Intercepts Count", "difficulty": "Hard", "questionEn": "How many $x$-intercepts does the circle $(x - 2)^2 + (y - 5)^2 = 16$ have?", "questionAr": "كم نقطة تقاطع مع محور السينات ($x$-intercepts) تمتلكها الدائرة $(x - 2)^2 + (y - 5)^2 = 16$؟", "options": ["$1$", "$2$", "$0 (No x-intercepts)$", "Infinitely many"], "correctIndex": 2, "hint": "Set $y = 0$: $(x - 2)^2 + (0 - 5)^2 = 16 \\implies (x - 2)^2 + 25 = 16$.", "explanation": "$(x - 2)^2 = 16 - 25 = -9$. Since a square cannot be negative, there are no real solutions. The circle never touches or crosses the $x$-axis.", "trapTip": "The center is at $y = 5$ and radius is $4$, so the lowest point of the circle is at $y = 5 - 4 = 1 > 0$."}, {"id": "p6-40", "module": "P.6", "topic": "Perimeter of Triangle", "difficulty": "Medium", "questionEn": "Find the perimeter of the triangle with vertices $(0, 0)$, $(0, 3)$, and $(4, 0)$.", "questionAr": "أوجد محيط المثلث الذي رؤوسه $(0, 0)$ و $(0, 3)$ و $(4, 0)$.", "options": ["$7$", "$14$", "$24$", "$12$"], "correctIndex": 3, "hint": "The sides on the axes have lengths 3 and 4. Use the Pythagorean theorem for the hypotenuse.", "explanation": "Side 1 (vertical): $|3 - 0| = 3$.\nSide 2 (horizontal): $|4 - 0| = 4$.\nHypotenuse: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.\nPerimeter: $3 + 4 + 5 = 12$.", "trapTip": "Perimeter is the sum of all three side lengths: $3 + 4 + 5 = 12$."}];

const CHEATSHEET_DATA = {"P.1": {"title": "P.1: الأعداد الحقيقية والتعبيرات الجبرية (Real Numbers & Algebraic Expressions)", "cards": [{"title": "تصنيف مجموعات الأعداد (Number Sets)", "content": "<ul class=\"space-y-1.5 list-disc list-inside text-xs sm:text-sm\">\n          <li><strong>الأعداد الطبيعية (Natural):</strong> $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$</li>\n          <li><strong>الأعداد الكلية (Whole):</strong> $\\mathbb{W} = \\{0, 1, 2, \\dots\\}$</li>\n          <li><strong>الأعداد الصحيحة (Integers):</strong> $\\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$</li>\n          <li><strong>الأعداد النسبية (Rational):</strong> $\\mathbb{Q} = \\left\\{ \\frac{a}{b} \\mid a, b \\in \\mathbb{Z}, b \\ne 0 \\right\\}$ (كسور وأعداد عشرية منتهية أو دورية)</li>\n          <li><strong>الأعداد غير النسبية (Irrational):</strong> $\\mathbb{I}$ (أعداد عشرية غير منتهية وغير دورية مثل $\\sqrt{2}, \\pi, e$)</li>\n          <li><strong>الأعداد الحقيقية (Real):</strong> $\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I}$</li>\n        </ul>"}, {"title": "خصائص العمليات على الأعداد الحقيقية (Properties of Real Numbers)", "content": "<ul class=\"space-y-1.5 list-disc list-inside text-xs sm:text-sm\">\n          <li><strong>الإبدال (Commutative):</strong> $a + b = b + a$ وكذلك $ab = ba$</li>\n          <li><strong>التجميع (Associative):</strong> $(a + b) + c = a + (b + c)$ وكذلك $(ab)c = a(bc)$</li>\n          <li><strong>التوزيع (Distributive):</strong> $a(b + c) = ab + ac$</li>\n          <li><strong>المحايد (Identity):</strong> الجمعي هو $0$ ($a + 0 = a$) والضربي هو $1$ ($a \\cdot 1 = a$)</li>\n          <li><strong>النظير (Inverse):</strong> الجمعي $-a$ ($a + (-a) = 0$) والضربي $\\frac{1}{a}$ ($a \\cdot \\frac{1}{a} = 1$ حيث $a \\ne 0$)</li>\n        </ul>"}, {"title": "القيمة المطلقة والمسافة (Absolute Value & Distance)", "content": "<p class=\"text-xs sm:text-sm\"><strong>التعريف الدقيق للقيمة المطلقة:</strong></p>\n        <div class=\"my-2 p-3 bg-slate-900 rounded-xl text-center dir-ltr text-sm border border-slate-800\">\n          $$ |x| = \\begin{cases} x & \\text{if } x \\ge 0 \\\\ -x & \\text{if } x < 0 \\end{cases} $$\n        </div>\n        <p class=\"text-xs sm:text-sm\"><strong>المسافة بين نقطتين $a$ و $b$ على خط الأعداد:</strong></p>\n        <div class=\"my-2 p-2 bg-slate-900 rounded-xl text-center dir-ltr border border-slate-800\">\n          $$ d(a, b) = |b - a| = |a - b| $$\n        </div>\n        <p class=\"text-xs sm:text-sm\"><strong>أهم خصائص القيمة المطلقة:</strong></p>\n        <div class=\"my-2 p-2.5 bg-slate-900 rounded-xl text-center dir-ltr border border-slate-800\">\n          $$ |ab| = |a||b| \\quad , \\quad \\left|\\frac{a}{b}\\right| = \\frac{|a|}{|b|} \\quad (b \\ne 0) $$\n          $$ |a + b| \\le |a| + |b| \\quad \\text{(متباينة المثلث)} $$\n        </div>"}, {"title": "الفترات والمتباينات (Intervals & Inequalities)", "content": "<ul class=\"space-y-1.5 list-disc list-inside text-xs sm:text-sm\">\n          <li><strong>فترة مغلقة:</strong> $[a, b] = \\{x \\mid a \\le x \\le b\\}$</li>\n          <li><strong>فترة مفتوحة:</strong> $(a, b) = \\{x \\mid a < x < b\\}$</li>\n          <li><strong>نصف مغلقة:</strong> $[a, b) = \\{x \\mid a \\le x < b\\}$</li>\n          <li><strong>فترات غير محدودة:</strong> $[a, \\infty) = \\{x \\mid x \\ge a\\}$ و $(-\\infty, b] = \\{x \\mid x \\le b\\}$</li>\n          <li><strong>التقاطع ($\\cap$):</strong> العناصر المشتركة في الفترتين معاً.</li>\n          <li><strong>الاتحاد ($\\cup$):</strong> جميع العناصر التي تنتمي لإحدى الفترتين أو كلتيهما.</li>\n        </ul>"}]}, "P.2": {"title": "P.2: الأسس والجذور (Exponents & Radicals)", "cards": [{"title": "قوانين الأسس الصحيحة (Laws of Integer Exponents)", "content": "<div class=\"my-2 p-3 bg-slate-900 rounded-xl text-center dir-ltr border border-slate-800\">\n          $$ a^m \\cdot a^n = a^{m+n} \\quad , \\quad \\frac{a^m}{a^n} = a^{m-n} \\quad (a \\ne 0) $$\n          $$ (a^m)^n = a^{mn} \\quad , \\quad (ab)^n = a^n b^n \\quad , \\quad \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n} $$\n          $$ a^0 = 1 \\quad (a \\ne 0) \\quad , \\quad a^{-n} = \\frac{1}{a^n} \\quad , \\quad \\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n $$\n        </div>"}, {"title": "الجذور والأسس الكسرية (Radicals & Rational Exponents)", "content": "<div class=\"my-2 p-3 bg-slate-900 rounded-xl text-center dir-ltr border border-slate-800\">\n          $$ a^{1/n} = \\sqrt[n]{a} \\quad , \\quad a^{m/n} = (\\sqrt[n]{a})^m = \\sqrt[n]{a^m} $$\n          $$ \\sqrt[n]{a^n} = |a| \\quad \\text{(إذا كان $n$ زوجياً)} $$\n          $$ \\sqrt[n]{a^n} = a \\quad \\text{(إذا كان $n$ فردياً)} $$\n        </div>\n        <p class=\"text-xs text-slate-300\"><strong>تنبيه:</strong> الجذور الزوجية تتطلب دائماً قيمة مطلقة $|a|$ لضمان الناتج الموجب، بينما الجذور الفردية لا تحتاج لقيمة مطلقة وتسمح بالأعداد السالبة.</p>"}, {"title": "إنطاق المقام بالمرافق (Rationalizing Denominators)", "content": "<ul class=\"space-y-1.5 list-disc list-inside text-xs sm:text-sm\">\n          <li><strong>إنطاق مقام وحيد الحد:</strong> $\\frac{c}{\\sqrt{a}} \\cdot \\frac{\\sqrt{a}}{\\sqrt{a}} = \\frac{c\\sqrt{a}}{a}$</li>\n          <li><strong>إنطاق مقام ذي حدين بالمرافق:</strong> مرافق المقدار $\\sqrt{a} + \\sqrt{b}$ هو $\\sqrt{a} - \\sqrt{b}$</li>\n        </ul>\n        <div class=\"my-2 p-2.5 bg-slate-900 rounded-xl text-center dir-ltr border border-slate-800\">\n          $$ (\\sqrt{a} - \\sqrt{b})(\\sqrt{a} + \\sqrt{b}) = (\\sqrt{a})^2 - (\\sqrt{b})^2 = a - b $$\n        </div>"}]}, "P.3": {"title": "P.3: كثيرات الحدود والمتطابقات (Polynomials & Special Products)", "cards": [{"title": "الدرجة والمعامل الرئيسي (Degree & Leading Coefficient)", "content": "<p class=\"text-xs sm:text-sm\"><strong>الصيغة القياسية:</strong> $P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0$</p>\n        <ul class=\"space-y-1 list-disc list-inside mt-2 text-xs text-slate-300\">\n          <li><strong>درجة كثير الحدود:</strong> أعلى أس للمتغير $x$.</li>\n          <li><strong>المعامل الرئيسي (Leading Coefficient):</strong> معامل الحد ذي الدرجة الأعلى $a_n$.</li>\n          <li><strong>درجة الحد متعدد المتغيرات:</strong> مجموع أسس المتغيرات في الحد الواحد (مثال: $4x^3 y^5$ درجته $3+5=8$).</li>\n        </ul>"}, {"title": "المتطابقات التربيعية الشهيرة (Special Products - Squares)", "content": "<div class=\"my-2 p-3 bg-slate-900 rounded-xl text-center dir-ltr border border-slate-800\">\n          $$ (A + B)^2 = A^2 + 2AB + B^2 $$\n          $$ (A - B)^2 = A^2 - 2AB + B^2 $$\n          $$ (A - B)(A + B) = A^2 - B^2 $$\n          $$ (A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2AC + 2BC $$\n        </div>"}, {"title": "المتطابقات التكعيبية الشهيرة (Special Products - Cubes)", "content": "<div class=\"my-2 p-3 bg-slate-900 rounded-xl text-center dir-ltr border border-slate-800\">\n          $$ (A + B)^3 = A^3 + 3A^2 B + 3AB^2 + B^3 $$\n          $$ (A - B)^3 = A^3 - 3A^2 B + 3AB^2 - B^3 $$\n        </div>\n        <p class=\"text-xs text-amber-300\"><strong>تنبيه فخ الاختبار:</strong> تذكر دائماً تناوب الإشارات في مفكوك $(A-B)^3$: موجبة، سالبة، موجبة، سالبة.</p>"}]}, "P.4": {"title": "P.4: التحليل الجبري (Factoring Techniques)", "cards": [{"title": "خوارزمية التحليل الشامل (Master Factoring Flow)", "content": "<ol class=\"space-y-1.5 list-decimal list-inside text-xs\">\n          <li><strong>الخطوة الأولى:</strong> إخراج العامل المشترك الأكبر (GCF) دائماً أولاً.</li>\n          <li><strong>الخطوة الثانية:</strong> عد حدود المقدار المتبقي:\n            <ul class=\"list-disc list-inside mr-4 mt-1 space-y-0.5 text-slate-300\">\n              <li><strong>حدان:</strong> فرق مربعين $A^2 - B^2$ ، مجموع مكعبين $A^3 + B^3$ ، فرق مكعبين $A^3 - B^3$.</li>\n              <li><strong>3 حدود:</strong> ثلاثي مربع كامل أو طريقة $ac$-method لتحليل $ax^2 + bx + c$.</li>\n              <li><strong>4 حدود:</strong> التحليل بالتجميع (Grouping) بنمط $2+2$ أو $3+1$.</li>\n            </ul>\n          </li>\n        </ol>"}, {"title": "قوانين تحليل المربعين والمكعبين", "content": "<div class=\"my-2 p-3 bg-slate-900 rounded-xl text-center dir-ltr border border-slate-800\">\n          $$ A^2 - B^2 = (A - B)(A + B) $$\n          $$ A^3 + B^3 = (A + B)(A^2 - AB + B^2) $$\n          $$ A^3 - B^3 = (A - B)(A^2 + AB + B^2) $$\n        </div>\n        <p class=\"text-xs text-slate-300\"><strong>قاعدة إشارات المكعبين SOAP:</strong><br>\n        <strong>S</strong>ame (نفس إشارة المكعبين للحدين الأولين) • <strong>O</strong>pposite (عكس الإشارة للحد الأوسط) • <strong>A</strong>lways <strong>P</strong>ositive (موجبة دائماً للحد الأخير).</p>"}]}, "P.5": {"title": "P.5: المقادير النسبية (Rational Expressions)", "cards": [{"title": "شروط وتحديد المجال (Domain Restrictions)", "content": "<ul class=\"space-y-1.5 list-disc list-inside text-xs sm:text-sm\">\n          <li><strong>المقدار النسبي $\\frac{P(x)}{Q(x)}$:</strong> المجال هو جميع الأعداد الحقيقية ما عدا أصفار المقام ($Q(x) \\ne 0$).</li>\n          <li><strong>الجذر التربيعي في البسط $\\frac{\\sqrt{f(x)}}{g(x)}$:</strong> يتطلب $f(x) \\ge 0$ مع $g(x) \\ne 0$.</li>\n          <li><strong>الجذر التربيعي في المقام $\\frac{1}{\\sqrt{f(x)}}$:</strong> يتطلب $f(x) > 0$ تماماً (موجب قطعاً).</li>\n          <li><strong>قاعدة ذهبية:</strong> قيود المجال تُستخرج دائماً من <em>المقدار الأصلي قبل الاختصار</em>.</li>\n        </ul>"}, {"title": "تبسيط وعمليات المقادير النسبية", "content": "<div class=\"my-2 p-3 bg-slate-900 rounded-xl text-center dir-ltr border border-slate-800\">\n          $$ \\frac{a - b}{b - a} = -1 \\quad \\text{(خاصية تعاكس الإشارة)} $$\n          $$ \\frac{A}{B} \\div \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C} $$\n        </div>\n        <p class=\"text-xs text-slate-300\"><strong>جمع وطرح الكسور المختلفة المقامات:</strong><br>\n        أوجد المضاعف المشترك الأصغر للمقامات (LCD) عبر أخذ كل عامل بأعلى أس له، ثم وحد المقامات واجمع البسوط.</p>"}]}, "P.6": {"title": "P.6: المستوى الإحداثي والدائرة (Cartesian Coordinates & Circles)", "cards": [{"title": "إشارات الأرباع الهندسية (Quadrants)", "content": "<div class=\"grid grid-cols-2 gap-2 text-center text-xs my-2 font-mono\">\n          <div class=\"p-2 bg-slate-900 rounded-lg border border-slate-800\">الربع الثاني II: $(-, +)$</div>\n          <div class=\"p-2 bg-slate-900 rounded-lg border border-slate-800\">الربع الأول I: $(+, +)$</div>\n          <div class=\"p-2 bg-slate-900 rounded-lg border border-slate-800\">الربع الثالث III: $(-, -)$</div>\n          <div class=\"p-2 bg-slate-900 rounded-lg border border-slate-800\">الربع الرابع IV: $(+, -)$</div>\n        </div>\n        <p class=\"text-xs text-slate-400\">محور السينات معادلته $y = 0$ ، ومحور الصادات معادلته $x = 0$.</p>"}, {"title": "المسافة ونقطة المنتصف (Distance & Midpoint)", "content": "<div class=\"my-2 p-3 bg-slate-900 rounded-xl text-center dir-ltr border border-slate-800\">\n          $$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$\n          $$ M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) $$\n        </div>\n        <p class=\"text-xs text-slate-300\">إيجاد النقطة الطرفية المجهولة $B(x_2, y_2)$: $x_2 = 2x_M - x_1$ و $y_2 = 2y_M - y_1$.</p>"}, {"title": "معادلات الدائرة وحالاتها (Circle Equations)", "content": "<div class=\"my-2 p-3 bg-slate-900 rounded-xl text-center dir-ltr border border-slate-800\">\n          $$ (x - h)^2 + (y - k)^2 = r^2 \\quad \\implies \\text{المركز: } (h, k) \\text{ ، نصف القطر: } r $$\n          $$ x^2 + y^2 + Dx + Ey + F = 0 \\quad \\implies \\text{المركز: } \\left(-\\frac{D}{2}, -\\frac{E}{2}\\right) $$\n        </div>\n        <ul class=\"space-y-1 list-disc list-inside text-xs mt-2 text-slate-300\">\n          <li>إذا $r^2 > 0$: تمثل دائرة حقيقية بنصف قطر $r = \\sqrt{r^2}$.</li>\n          <li>إذا $r^2 = 0$: تمثل نقطة واحدة فقط $(h, k)$ (دائرة متدهورة).</li>\n          <li>إذا $r^2 < 0$: تمثل مجموعة خالية (لا يوجد أي تمثيل بياني).</li>\n          <li>مماسة لمحور السينات: $r = |k|$ • مماسة لمحور الصادات: $r = |h|$.</li>\n        </ul>"}]}};

const SoundFx = {
      ctx: null,
      init() {
        if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
          this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
      },
      playCorrect() {
        try {
          this.init();
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
          osc.frequency.exponentialRampToValueAtTime(659.25, this.ctx.currentTime + 0.1); // E5
          osc.frequency.exponentialRampToValueAtTime(783.99, this.ctx.currentTime + 0.2); // G5
          gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start();
          osc.stop(this.ctx.currentTime + 0.35);
        } catch(e){}
      },
      playIncorrect() {
        try {
          this.init();
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(220, this.ctx.currentTime);
          osc.frequency.linearRampToValueAtTime(160, this.ctx.currentTime + 0.25);
          gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start();
          osc.stop(this.ctx.currentTime + 0.25);
        } catch(e){}
      }
    };

    // ==========================================
    // APPLICATION STATE MACHINE
    // ==========================================
    const App = {
      mode: 'chapter', // chapter, exam, mistakes, bookmarks
      moduleFilter: 'ALL',
      diffFilter: 'ALL',
      currentQuestionIdx: 0,
      filteredQuestions: [],
      lang: 'bi', // bi, ar, en

      // Persistent Storage
      solved: {}, // { qid: { answered: true, selectedIdx: 0, isCorrect: true, date: '' } }
      bookmarks: new Set(),
      mistakes: new Set(),
      stats: { streak: 0, lastSolveDate: null },

      // Exam Mode State
      exam: {
        active: false,
        questions: [],
        answers: {}, // { qIndex: selectedOptionIndex }
        flagged: new Set(),
        timeRemaining: 40 * 60, // 40 minutes
        timerInterval: null,
        submitted: false,
        results: null
      },

      init() {
        this.loadStorage();
        this.bindEvents();
        this.initScratchpad();
        this.initCalculator();
        this.initCheatSheet();
        this.applyFilters();
        this.updateStatsUI();
        this.renderCurrentQuestion();
      },

      loadStorage() {
        try {
          const savedSolved = localStorage.getItem('math001_solved');
          if (savedSolved) this.solved = JSON.parse(savedSolved);

          const savedBookmarks = localStorage.getItem('math001_bookmarks');
          if (savedBookmarks) this.bookmarks = new Set(JSON.parse(savedBookmarks));

          const savedMistakes = localStorage.getItem('math001_mistakes');
          if (savedMistakes) this.mistakes = new Set(JSON.parse(savedMistakes));

          const savedStats = localStorage.getItem('math001_stats');
          if (savedStats) this.stats = JSON.parse(savedStats);

          const savedLang = localStorage.getItem('math001_lang');
          if (savedLang) this.lang = savedLang;
        } catch(e) {
          console.error("Storage loading error:", e);
        }
      },

      saveStorage() {
        try {
          localStorage.setItem('math001_solved', JSON.stringify(this.solved));
          localStorage.setItem('math001_bookmarks', JSON.stringify(Array.from(this.bookmarks)));
          localStorage.setItem('math001_mistakes', JSON.stringify(Array.from(this.mistakes)));
          localStorage.setItem('math001_stats', JSON.stringify(this.stats));
          localStorage.setItem('math001_lang', this.lang);
        } catch(e) {
          console.error("Storage save error:", e);
        }
      },

      updateStatsUI() {
        const solvedKeys = Object.keys(this.solved);
        const solvedCount = solvedKeys.length;
        const correctCount = solvedKeys.filter(k => this.solved[k].isCorrect).length;
        const accuracy = solvedCount > 0 ? Math.round((correctCount / solvedCount) * 100) : 0;

        document.getElementById('stat-streak').textContent = this.stats.streak || 0;
        document.getElementById('stat-solved').textContent = `${solvedCount}/240`;
        document.getElementById('stat-accuracy').textContent = `${accuracy}%`;

        // Update badges
        const mb = document.getElementById('mistakes-badge');
        if (this.mistakes.size > 0) {
          mb.textContent = this.mistakes.size;
          mb.classList.remove('hidden');
        } else {
          mb.classList.add('hidden');
        }

        const bb = document.getElementById('bookmarks-badge');
        if (this.bookmarks.size > 0) {
          bb.textContent = this.bookmarks.size;
          bb.classList.remove('hidden');
        } else {
          bb.classList.add('hidden');
        }

        // Lang label
        const langLabels = { bi: '🌐 ثنائي', ar: '🇸🇦 عربي', en: '🇬🇧 English' };
        document.getElementById('lang-display-label').textContent = langLabels[this.lang] || '🌐 ثنائي';
      },

      applyFilters() {
        if (this.mode === 'chapter') {
          this.filteredQuestions = QUESTION_BANK.filter(q => {
            const matchesMod = (this.moduleFilter === 'ALL' || q.module === this.moduleFilter);
            const matchesDiff = (this.diffFilter === 'ALL' || q.difficulty === this.diffFilter);
            return matchesMod && matchesDiff;
          });
        } else if (this.mode === 'mistakes') {
          this.filteredQuestions = QUESTION_BANK.filter(q => this.mistakes.has(q.id));
        } else if (this.mode === 'bookmarks') {
          this.filteredQuestions = QUESTION_BANK.filter(q => this.bookmarks.has(q.id));
        }

        if (this.currentQuestionIdx >= this.filteredQuestions.length) {
          this.currentQuestionIdx = Math.max(0, this.filteredQuestions.length - 1);
        }
      },

            formatOption(text) {
    if (!text) return '';
    let s = text.trim();
    if (s.includes('$')) return s;
    const isText = /^(Quadrant|Every|All|No|Yes|An empty|A single|At the|On the|Inside|Outside|The negative|The line|The [xy]-axis|Right-angled|Isosceles|Equilateral|Scalene|Binomial|Monomial|Trinomial|Prime|Infinitely|Zero is).*$/i.test(s)
      || /Property/i.test(s) || /Identity/i.test(s);
    if (isText && !s.includes('\\') && !s.includes('^')) return s;
    return `$${s}$`;
  },

  renderMath(rootEl = document.body) {
    const doRender = () => {
      if (window.renderMathInElement) {
        try {
          window.renderMathInElement(rootEl, {
            delimiters: [
              { left: "$$", right: "$$", display: true },
              { left: "$", right: "$", display: false },
              { left: "\\[", right: "\\]", display: true },
              { left: "\\(", right: "\\)", display: false }
            ],
            throwOnError: false,
            ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
          });
        } catch (e) {
          console.warn("KaTeX render error:", e);
        }
      } else {
        setTimeout(doRender, 100);
      }
    };
    doRender();
  },

  renderCurrentQuestion() {
        if (this.filteredQuestions.length === 0) {
          document.getElementById('q-text-en').textContent = "No questions found matching the selected filters.";
          document.getElementById('q-text-ar').textContent = "لا توجد أسئلة تطابق الفلاتر المحددة.";
          document.getElementById('q-options-container').innerHTML = "";
          document.getElementById('q-feedback-container').classList.add('hidden');
          document.getElementById('q-current-num').textContent = "0";
          document.getElementById('q-total-num').textContent = "0";
          return;
        }

        const q = this.filteredQuestions[this.currentQuestionIdx];
        const record = this.solved[q.id];

        // Meta tags
        document.getElementById('q-meta-module').textContent = q.module;
        document.getElementById('q-meta-topic').textContent = q.topic;
        
        const diffBadge = document.getElementById('q-meta-difficulty');
        diffBadge.textContent = q.difficulty === 'Easy' ? 'سهل' : (q.difficulty === 'Medium' ? 'متوسط' : 'صعب');
        diffBadge.className = 'px-2.5 py-1 rounded-full text-xs font-bold border ' + 
          (q.difficulty === 'Easy' ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' : 
           (q.difficulty === 'Medium' ? 'bg-amber-500/15 text-amber-400 border-amber-500/30' : 
            'bg-rose-500/15 text-rose-400 border-rose-500/30'));

        // Bookmark star
        const isBookmarked = this.bookmarks.has(q.id);
        const starBtn = document.getElementById('q-btn-bookmark');
        const starIcon = document.getElementById('star-icon');
        if (isBookmarked) {
          starBtn.classList.add('text-amber-400', 'border-amber-500/40');
          starIcon.setAttribute('fill', 'currentColor');
        } else {
          starBtn.classList.remove('text-amber-400', 'border-amber-500/40');
          starIcon.setAttribute('fill', 'none');
        }

        // Counter
        document.getElementById('q-current-num').textContent = this.currentQuestionIdx + 1;
        document.getElementById('q-total-num').textContent = this.filteredQuestions.length;

        // Question Texts depending on Language Mode
        const enEl = document.getElementById('q-text-en');
        const arEl = document.getElementById('q-text-ar');
        enEl.innerHTML = q.questionEn;
        arEl.innerHTML = q.questionAr;

        if (this.lang === 'en') {
          enEl.classList.remove('hidden');
          arEl.classList.add('hidden');
        } else if (this.lang === 'ar') {
          enEl.classList.add('hidden');
          arEl.classList.remove('hidden');
        } else {
          enEl.classList.remove('hidden');
          arEl.classList.remove('hidden');
        }

        // Build Options
        const letters = ['A', 'B', 'C', 'D'];
        const container = document.getElementById('q-options-container');
        container.innerHTML = "";

        const isAnswered = !!record;

        q.options.forEach((optText, optIdx) => {
          const btn = document.createElement('button');
          btn.className = "group relative p-4 rounded-2xl border text-right transition-all flex items-center justify-between gap-3 text-sm sm:text-base font-medium active:scale-[0.99]";

          let borderClass = "border-slate-800 bg-slate-950/70 hover:bg-slate-800/80 text-slate-200 hover:border-slate-700";
          let badgeClass = "bg-slate-800 text-slate-400 group-hover:text-cyan-400";

          if (isAnswered) {
            btn.disabled = true;
            if (optIdx === q.correctIndex) {
              borderClass = "border-emerald-500 bg-emerald-950/40 text-emerald-200 ring-2 ring-emerald-500/50";
              badgeClass = "bg-emerald-500 text-slate-950 font-black";
            } else if (optIdx === record.selectedIdx && !record.isCorrect) {
              borderClass = "border-rose-500 bg-rose-950/40 text-rose-200 ring-2 ring-rose-500/50";
              badgeClass = "bg-rose-500 text-white font-black";
            } else {
              borderClass = "border-slate-800/40 bg-slate-950/40 text-slate-500 opacity-60";
            }
          }

          btn.className += ` ${borderClass}`;

          btn.innerHTML = `
            <div class="flex-1 text-left dir-ltr math-content">${this.formatOption(optText)}</div>
            <span class="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${badgeClass}">${letters[optIdx]}</span>
          `;

          if (!isAnswered) {
            btn.onclick = () => this.handleOptionSelect(q, optIdx);
          }

          container.appendChild(btn);
        });

        // Feedback section
        const fb = document.getElementById('q-feedback-container');
        if (isAnswered) {
          fb.classList.remove('hidden');

          const statusBanner = document.getElementById('q-status-banner');
          if (record.isCorrect) {
            statusBanner.className = "p-3.5 rounded-2xl flex items-center justify-between font-bold text-sm bg-emerald-950/60 border border-emerald-500/40 text-emerald-300";
            statusBanner.innerHTML = `
              <div class="flex items-center gap-2">
                <span class="text-xl">🎉</span>
                <span>إجابة صحيحة ومتقنة! (Excellent! Correct Answer)</span>
              </div>
              <span class="text-xs bg-emerald-500 text-slate-950 px-2.5 py-0.5 rounded-full font-black">+1 Point</span>
            `;
          } else {
            statusBanner.className = "p-3.5 rounded-2xl flex items-center justify-between font-bold text-sm bg-rose-950/60 border border-rose-500/40 text-rose-300";
            statusBanner.innerHTML = `
              <div class="flex items-center gap-2">
                <span class="text-xl">❌</span>
                <span>إجابة غير صحيحة - تم إضافتها لبنك الأخطاء للمراجعة</span>
              </div>
              <span class="text-xs bg-rose-500 text-white px-2.5 py-0.5 rounded-full font-bold">Needs Review</span>
            `;
          }

          document.getElementById('q-hint-text').innerHTML = q.hint;
          document.getElementById('q-explanation-text').innerHTML = q.explanation.replace(/\\n/g, '<br>');
          document.getElementById('q-traptip-text').innerHTML = q.trapTip;
        } else {
          fb.classList.add('hidden');
        }

        // Navigation state
        document.getElementById('btn-prev-q').disabled = (this.currentQuestionIdx === 0);
        document.getElementById('btn-next-q').disabled = (this.currentQuestionIdx >= this.filteredQuestions.length - 1);

        // Render KaTeX for the question card
        this.renderMath(document.getElementById('question-card-container'));
      },

      handleOptionSelect(q, selectedIdx) {
        const isCorrect = (selectedIdx === q.correctIndex);

        // Update streak
        const today = new Date().toDateString();
        if (isCorrect) {
          SoundFx.playCorrect();
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#10b981', '#06b6d4', '#f59e0b']
          });

          if (this.stats.lastSolveDate === today) {
            this.stats.streak = (this.stats.streak || 0) + 1;
          } else {
            this.stats.streak = (this.stats.streak || 0) + 1;
            this.stats.lastSolveDate = today;
          }

          // If in mistakes bank, remove if mastered
          if (this.mistakes.has(q.id)) {
            this.mistakes.delete(q.id);
          }
        } else {
          SoundFx.playIncorrect();
          this.stats.streak = 0;
          this.mistakes.add(q.id);
        }

        this.solved[q.id] = {
          answered: true,
          selectedIdx: selectedIdx,
          isCorrect: isCorrect,
          timestamp: Date.now()
        };

        this.saveStorage();
        this.updateStatsUI();
        this.renderCurrentQuestion();
      },

      // ==========================================
      // EXAM SIMULATION ENGINE
      // ==========================================
      startExam() {
        // Pick 20 questions distributed across modules (approx 3-4 per module)
        const sample = [];
        const modules = ['P.1', 'P.2', 'P.3', 'P.4', 'P.5', 'P.6'];
        modules.forEach(mod => {
          const modPool = QUESTION_BANK.filter(q => q.module === mod);
          // Shuffle
          const shuffled = [...modPool].sort(() => 0.5 - Math.random());
          sample.push(...shuffled.slice(0, 3)); // 3 * 6 = 18
        });

        // Add 2 more random questions from anywhere to make exactly 20
        const remaining = QUESTION_BANK.filter(q => !sample.includes(q)).sort(() => 0.5 - Math.random());
        sample.push(...remaining.slice(0, 2));

        // Shuffle the 20 questions
        this.exam.questions = sample.sort(() => 0.5 - Math.random());
        this.exam.answers = {};
        this.exam.flagged = new Set();
        this.exam.currentIdx = 0;
        this.exam.timeRemaining = 40 * 60; // 40 mins
        this.exam.active = true;
        this.exam.submitted = false;

        document.getElementById('exam-prestart-card').classList.add('hidden');
        document.getElementById('exam-results-container').classList.add('hidden');
        document.getElementById('exam-live-container').classList.remove('hidden');

        this.startExamTimer();
        this.renderExamPalette();
        this.renderExamQuestion();
      },

      startExamTimer() {
        if (this.exam.timerInterval) clearInterval(this.exam.timerInterval);

        const display = document.getElementById('exam-timer-display');

        this.exam.timerInterval = setInterval(() => {
          if (this.exam.timeRemaining <= 0) {
            clearInterval(this.exam.timerInterval);
            this.submitExam(true);
            return;
          }

          this.exam.timeRemaining--;
          const mins = Math.floor(this.exam.timeRemaining / 60);
          const secs = this.exam.timeRemaining % 60;
          display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

          if (this.exam.timeRemaining <= 300) { // under 5 mins
            display.classList.add('timer-warning');
          } else {
            display.classList.remove('timer-warning');
          }
        }, 1000);
      },

      renderExamPalette() {
        const palette = document.getElementById('exam-palette-container');
        palette.innerHTML = "";

        this.exam.questions.forEach((q, idx) => {
          const btn = document.createElement('button');
          btn.className = "w-8 h-8 rounded-xl font-mono text-xs font-bold transition flex items-center justify-center border shrink-0";
          
          const isAnswered = this.exam.answers[idx] !== undefined;
          const isFlagged = this.exam.flagged.has(idx);
          const isCurrent = (this.exam.currentIdx === idx);

          let bg = "bg-slate-950 text-slate-400 border-slate-800";
          if (isAnswered) bg = "bg-cyan-500 text-slate-950 border-cyan-400 font-black";
          if (isFlagged) bg = "bg-amber-500 text-slate-950 border-amber-400 font-black";

          if (isCurrent) {
            btn.className += ` ring-2 ring-emerald-400 ${bg}`;
          } else {
            btn.className += ` ${bg}`;
          }

          btn.textContent = idx + 1;
          btn.onclick = () => {
            this.exam.currentIdx = idx;
            this.renderExamPalette();
            this.renderExamQuestion();
          };
          palette.appendChild(btn);
        });

        const answeredCount = Object.keys(this.exam.answers).length;
        document.getElementById('exam-answered-count').textContent = answeredCount;
      },

      renderExamQuestion() {
        const q = this.exam.questions[this.exam.currentIdx];
        document.getElementById('exam-q-num').textContent = this.exam.currentIdx + 1;
        document.getElementById('exam-q-module').textContent = q.module;
        document.getElementById('exam-q-topic').textContent = q.topic;

        document.getElementById('exam-q-en').innerHTML = q.questionEn;
        document.getElementById('exam-q-ar').innerHTML = q.questionAr;

        const letters = ['A', 'B', 'C', 'D'];
        const container = document.getElementById('exam-options-container');
        container.innerHTML = "";

        const selectedIdx = this.exam.answers[this.exam.currentIdx];

        q.options.forEach((optText, optIdx) => {
          const btn = document.createElement('button');
          btn.className = "group relative p-4 rounded-2xl border text-right transition-all flex items-center justify-between gap-3 text-sm font-medium active:scale-[0.99]";

          const isSelected = (selectedIdx === optIdx);
          const borderClass = isSelected 
            ? "border-cyan-500 bg-cyan-950/40 text-cyan-200 ring-2 ring-cyan-500/50" 
            : "border-slate-800 bg-slate-950/70 hover:bg-slate-800 text-slate-200 hover:border-slate-700";
          const badgeClass = isSelected 
            ? "bg-cyan-500 text-slate-950 font-black" 
            : "bg-slate-800 text-slate-400 group-hover:text-cyan-400";

          btn.className += ` ${borderClass}`;
          btn.innerHTML = `
            <div class="flex-1 text-left dir-ltr math-content">${this.formatOption(optText)}</div>
            <span class="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${badgeClass}">${letters[optIdx]}</span>
          `;

          btn.onclick = () => {
            this.exam.answers[this.exam.currentIdx] = optIdx;
            this.renderExamPalette();
            this.renderExamQuestion();
          };

          container.appendChild(btn);
        });

        // Flag button label
        const isFlagged = this.exam.flagged.has(this.exam.currentIdx);
        const flagBtn = document.getElementById('btn-exam-flag');
        if (isFlagged) {
          flagBtn.classList.add('bg-amber-500/20', 'text-amber-400', 'border-amber-500/40');
        } else {
          flagBtn.classList.remove('bg-amber-500/20', 'text-amber-400', 'border-amber-500/40');
        }

        // Nav buttons
        document.getElementById('btn-exam-prev').disabled = (this.exam.currentIdx === 0);
        document.getElementById('btn-exam-next').disabled = (this.exam.currentIdx === this.exam.questions.length - 1);

        this.renderMath(document.getElementById('exam-live-container'));
      },

      submitExam(force = false) {
        if (!force) {
          const unanswered = 20 - Object.keys(this.exam.answers).length;
          if (unanswered > 0) {
            if (!confirm(`لديك ${unanswered} أسئلة لم تقم بالإجابة عليها بعد. هل أنت متأكد من تسليم الاختبار الآن؟`)) {
              return;
            }
          } else {
            if (!confirm("هل أنت متأكد من تسليم الاختبار ورصد النتيجة النهائية؟")) {
              return;
            }
          }
        }

        clearInterval(this.exam.timerInterval);
        this.exam.active = false;
        this.exam.submitted = true;

        // Calculate score and diagnostics
        let correctCount = 0;
        const moduleStats = {
          'P.1': { total: 0, correct: 0 },
          'P.2': { total: 0, correct: 0 },
          'P.3': { total: 0, correct: 0 },
          'P.4': { total: 0, correct: 0 },
          'P.5': { total: 0, correct: 0 },
          'P.6': { total: 0, correct: 0 }
        };

        this.exam.questions.forEach((q, idx) => {
          const userAns = this.exam.answers[idx];
          const isCorrect = (userAns === q.correctIndex);
          if (isCorrect) correctCount++;

          if (!moduleStats[q.module]) moduleStats[q.module] = { total: 0, correct: 0 };
          moduleStats[q.module].total++;
          if (isCorrect) moduleStats[q.module].correct++;

          // Register in main solved pool & mistakes
          this.solved[q.id] = {
            answered: true,
            selectedIdx: userAns,
            isCorrect: isCorrect,
            timestamp: Date.now()
          };

          if (!isCorrect) {
            this.mistakes.add(q.id);
          }
        });

        this.saveStorage();
        this.updateStatsUI();

        // Render Results Screen
        document.getElementById('exam-live-container').classList.add('hidden');
        document.getElementById('exam-results-container').classList.remove('hidden');

        const pct = Math.round((correctCount / 20) * 100);
        document.getElementById('results-score-text').textContent = `${correctCount}/20`;
        document.getElementById('results-percentage-text').textContent = `${pct}%`;

        const titleEl = document.getElementById('results-evaluation-title');
        const descEl = document.getElementById('results-evaluation-desc');

        if (pct >= 90) {
          titleEl.textContent = "ممتاز مرتفع (A+ Distinction)";
          descEl.textContent = "أداؤك استثنائي ويعكس إتقاناً كاملاً لمعايير ومفاهيم الرياضيات التحضيرية.";
          confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        } else if (pct >= 80) {
          titleEl.textContent = "جيد جداً مرتفع (B+ Very Good)";
          descEl.textContent = "مستوى متقدم وجاهزية قوية للاختبار مع وجود تفاصيل يسيرة يُنصح بمراجعتها.";
        } else if (pct >= 60) {
          titleEl.textContent = "مجتاز (Passing Grade C)";
          descEl.textContent = "مستوى مقبول، يُوصى بالتركيز على بنك الأخطاء وتثبيت الفصول ذات الأداء المنخفض.";
        } else {
          titleEl.textContent = "يحتاج إلى مراجعة مكثفة (Needs Intensive Review)";
          descEl.textContent = "تحتاج إلى إعادة مراجعة ملخصات القوانين والتدرب على المسائل خطوة بخطوة في بنك الأخطاء.";
        }

        const timeSpentSeconds = (40 * 60) - this.exam.timeRemaining;
        const sm = Math.floor(timeSpentSeconds / 60);
        const ss = timeSpentSeconds % 60;
        document.getElementById('results-time-spent').textContent = `${sm}:${ss.toString().padStart(2, '0')}`;

        // Module Diagnostic bars
        const barsContainer = document.getElementById('results-module-bars');
        barsContainer.innerHTML = "";
        Object.keys(moduleStats).forEach(mod => {
          const s = moduleStats[mod];
          if (s.total === 0) return;
          const modPct = Math.round((s.correct / s.total) * 100);
          const colorClass = modPct >= 80 ? 'bg-emerald-500' : (modPct >= 50 ? 'bg-amber-500' : 'bg-rose-500');

          const div = document.createElement('div');
          div.className = "p-3 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col gap-1.5";
          div.innerHTML = `
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-white">${mod}</span>
              <span class="font-mono text-slate-400">${s.correct}/${s.total} (${modPct}%)</span>
            </div>
            <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div class="h-full rounded-full ${colorClass}" style="width: ${modPct}%"></div>
            </div>
          `;
          barsContainer.appendChild(div);
        });

        // Render detailed questions list
        this.renderExamReviewList('all');
      },

      renderExamReviewList(filter = 'all') {
        const list = document.getElementById('results-questions-list');
        list.innerHTML = "";

        this.exam.questions.forEach((q, idx) => {
          const userAns = this.exam.answers[idx];
          const isCorrect = (userAns === q.correctIndex);

          if (filter === 'wrong' && isCorrect) return;
          if (filter === 'correct' && !isCorrect) return;

          const card = document.createElement('div');
          card.className = "p-4 sm:p-5 rounded-2xl border flex flex-col gap-3 " +
            (isCorrect ? 'bg-emerald-950/20 border-emerald-500/30' : 'bg-rose-950/20 border-rose-500/30');

          card.innerHTML = `
            <div class="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-300">سؤال ${idx + 1} (${q.module})</span>
                <span class="text-slate-500">• ${q.topic}</span>
              </div>
              <span class="px-2.5 py-0.5 rounded-full font-bold ${isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'}">
                ${isCorrect ? '✓ صحيح' : '✗ غير صحيح'}
              </span>
            </div>
            <div class="text-sm font-medium text-slate-200 dir-ltr text-left">${q.questionEn}</div>
            <div class="text-sm text-slate-300 dir-rtl text-right">${q.questionAr}</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mt-1">
              <div class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span class="text-slate-400">إجابتك: </span>
                <span class="font-bold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}">${userAns !== undefined ? q.options[userAns] : 'لم تجب'}</span>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span class="text-slate-400">الإجابة الصحيحة: </span>
                <span class="font-bold text-emerald-400">${q.options[q.correctIndex]}</span>
              </div>
            </div>
            <div class="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 mt-1">
              <span class="text-emerald-400 font-bold block mb-1">الشرح:</span>
              ${q.explanation}
            </div>
          `;
          list.appendChild(card);
        });

        this.renderMath(list);
      },

      // ==========================================
      // MISTAKES & BOOKMARKS VIEWS
      // ==========================================
      renderMistakesView() {
        const list = document.getElementById('mistakes-list-container');
        const empty = document.getElementById('mistakes-empty-state');
        list.innerHTML = "";

        const mistakeQuestions = QUESTION_BANK.filter(q => this.mistakes.has(q.id));

        if (mistakeQuestions.length === 0) {
          empty.classList.remove('hidden');
          return;
        } else {
          empty.classList.add('hidden');
        }

        mistakeQuestions.forEach((q, idx) => {
          const card = document.createElement('div');
          card.className = "bg-slate-900/90 rounded-2xl p-5 border border-slate-800 shadow-xl flex flex-col gap-3";

          card.innerHTML = `
            <div class="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30 font-bold">${q.module}</span>
                <span class="text-slate-400">${q.topic}</span>
              </div>
              <button class="btn-remove-mistake text-xs text-slate-400 hover:text-emerald-400 font-semibold transition" data-qid="${q.id}">
                ✓ تم الإتقان (إزالة من البنك)
              </button>
            </div>
            <div class="text-sm sm:text-base font-medium text-slate-100 dir-ltr text-left">${q.questionEn}</div>
            <div class="text-sm sm:text-base text-slate-300 dir-rtl text-right">${q.questionAr}</div>
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
              <span class="text-amber-400 font-bold block mb-1">فخ الاختبار:</span>
              <span class="text-slate-300">${q.trapTip}</span>
            </div>
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
              <span class="text-emerald-400 font-bold block mb-1">خطوات الحل:</span>
              <span class="text-slate-300">${q.explanation}</span>
            </div>
          `;

          card.querySelector('.btn-remove-mistake').onclick = (e) => {
            const qid = e.target.getAttribute('data-qid');
            this.mistakes.delete(qid);
            this.saveStorage();
            this.updateStatsUI();
            this.renderMistakesView();
          };

          list.appendChild(card);
        });

        this.renderMath(list);
      },

      renderBookmarksView() {
        const list = document.getElementById('bookmarks-list-container');
        const empty = document.getElementById('bookmarks-empty-state');
        list.innerHTML = "";

        const bookmarkedQuestions = QUESTION_BANK.filter(q => this.bookmarks.has(q.id));

        if (bookmarkedQuestions.length === 0) {
          empty.classList.remove('hidden');
          return;
        } else {
          empty.classList.add('hidden');
        }

        bookmarkedQuestions.forEach((q) => {
          const card = document.createElement('div');
          card.className = "bg-slate-900/90 rounded-2xl p-5 border border-slate-800 shadow-xl flex flex-col gap-3";

          card.innerHTML = `
            <div class="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold">${q.module}</span>
                <span class="text-slate-400">${q.topic}</span>
              </div>
              <button class="btn-remove-bm text-xs text-slate-400 hover:text-rose-400 font-semibold transition" data-qid="${q.id}">
                إزالة من المفضلة
              </button>
            </div>
            <div class="text-sm sm:text-base font-medium text-slate-100 dir-ltr text-left">${q.questionEn}</div>
            <div class="text-sm sm:text-base text-slate-300 dir-rtl text-right">${q.questionAr}</div>
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
              <span class="text-emerald-400 font-bold block mb-1">الإجابة النموذجية:</span>
              <span class="text-slate-300">${q.options[q.correctIndex]}</span>
            </div>
          `;

          card.querySelector('.btn-remove-bm').onclick = (e) => {
            const qid = e.target.getAttribute('data-qid');
            this.bookmarks.delete(qid);
            this.saveStorage();
            this.updateStatsUI();
            this.renderBookmarksView();
          };

          list.appendChild(card);
        });

        this.renderMath(list);
      },

      // ==========================================
      // PERSISTENT SCRATCHPAD CANVAS
      // ==========================================
      initScratchpad() {
        const canvas = document.getElementById('scratchpad-canvas');
        const container = document.getElementById('sp-canvas-container');
        const ctx = canvas.getContext('2d');

        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;
        let color = '#22d3ee';
        let strokeSize = 2;
        let tool = 'pen'; // pen, eraser
        let showGrid = false;

        // In-memory offscreen canvas backup so drawing is NEVER lost on resize
        const backupCanvas = document.createElement('canvas');
        const backupCtx = backupCanvas.getContext('2d');

        const resizeCanvas = () => {
          const rect = container.getBoundingClientRect();
          const dpr = window.devicePixelRatio || 1;
          const w = rect.width || 480;
          const h = rect.height || 300;

          // Save current
          if (canvas.width > 0 && canvas.height > 0) {
            backupCanvas.width = canvas.width;
            backupCanvas.height = canvas.height;
            backupCtx.drawImage(canvas, 0, 0);
          }

          canvas.width = w * dpr;
          canvas.height = h * dpr;
          ctx.scale(dpr, dpr);

          // Restore
          if (backupCanvas.width > 0) {
            ctx.drawImage(backupCanvas, 0, 0, backupCanvas.width / dpr, backupCanvas.height / dpr);
          }

          if (showGrid) drawGrid();
        };

        const drawGrid = () => {
          ctx.save();
          ctx.strokeStyle = 'rgba(51, 65, 85, 0.25)';
          ctx.lineWidth = 1;
          const step = 25;
          const rect = container.getBoundingClientRect();
          for (let x = 0; x < rect.width; x += step) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, rect.height);
            ctx.stroke();
          }
          for (let y = 0; y < rect.height; y += step) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(rect.width, y);
            ctx.stroke();
          }
          ctx.restore();
        };

        // Pointer Event Handlers (Support Stylus, Touch, Mouse with pressure)
        canvas.addEventListener('pointerdown', (e) => {
          isDrawing = true;
          canvas.setPointerCapture(e.pointerId);
          const rect = canvas.getBoundingClientRect();
          lastX = e.clientX - rect.left;
          lastY = e.clientY - rect.top;
        });

        canvas.addEventListener('pointermove', (e) => {
          if (!isDrawing) return;
          const rect = canvas.getBoundingClientRect();
          const curX = e.clientX - rect.left;
          const curY = e.clientY - rect.top;

          ctx.beginPath();
          ctx.moveTo(lastX, lastY);
          ctx.lineTo(curX, curY);

          if (tool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = strokeSize * 6;
          } else {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = color;
            ctx.lineWidth = strokeSize;
          }

          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();

          lastX = curX;
          lastY = curY;
        });

        const stopDrawing = (e) => {
          if (!isDrawing) return;
          isDrawing = false;
          try { canvas.releasePointerCapture(e.pointerId); } catch(err){}
        };

        canvas.addEventListener('pointerup', stopDrawing);
        canvas.addEventListener('pointercancel', stopDrawing);

        // Color buttons
        document.querySelectorAll('.sp-color').forEach(btn => {
          btn.onclick = () => {
            color = btn.getAttribute('data-color');
            tool = 'pen';
            document.querySelectorAll('.sp-color').forEach(b => b.classList.remove('border-white'));
            btn.classList.add('border-white');
            document.getElementById('sp-btn-eraser').classList.remove('bg-rose-600', 'text-white');
          };
        });

        // Size buttons
        document.querySelectorAll('.sp-size').forEach(btn => {
          btn.onclick = () => {
            strokeSize = parseInt(btn.getAttribute('data-size'));
            document.querySelectorAll('.sp-size').forEach(b => {
              b.classList.remove('bg-slate-800', 'text-white');
              b.classList.add('text-slate-400');
            });
            btn.classList.add('bg-slate-800', 'text-white');
            btn.classList.remove('text-slate-400');
          };
        });

        // Eraser button
        document.getElementById('sp-btn-eraser').onclick = (e) => {
          tool = (tool === 'eraser') ? 'pen' : 'eraser';
          const btn = document.getElementById('sp-btn-eraser');
          if (tool === 'eraser') {
            btn.classList.add('bg-rose-600', 'text-white');
          } else {
            btn.classList.remove('bg-rose-600', 'text-white');
          }
        };

        // Clear All button
        document.getElementById('sp-btn-clear').onclick = () => {
          if (confirm("هل أنت متأكد من رغبتك في مسح كل محتويات المسودة الحسابية؟")) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            backupCanvas.width = 0;
            backupCanvas.height = 0;
            if (showGrid) drawGrid();
          }
        };

        // Grid button
        document.getElementById('sp-btn-grid').onclick = () => {
          showGrid = !showGrid;
          document.getElementById('sp-btn-grid').classList.toggle('bg-cyan-500/20', showGrid);
          document.getElementById('sp-btn-grid').classList.toggle('text-cyan-400', showGrid);
          resizeCanvas();
        };

        // Scratchpad Wrapper toggling
        const wrapper = document.getElementById('scratchpad-wrapper');
        const launcher = document.getElementById('btn-floating-scratchpad');

        const openScratchpad = () => {
          wrapper.classList.remove('hidden');
          launcher.classList.add('hidden');
          setTimeout(resizeCanvas, 50);
        };

        const closeScratchpad = () => {
          wrapper.classList.add('hidden');
          launcher.classList.remove('hidden');
        };

        document.getElementById('btn-toggle-scratchpad').onclick = openScratchpad;
        launcher.onclick = openScratchpad;
        document.getElementById('sp-btn-close').onclick = closeScratchpad;
        document.getElementById('sp-btn-minimize').onclick = closeScratchpad;

        // Save scratchpad as PNG image
        const saveImgBtn = document.getElementById('sp-btn-save-img');
        if (saveImgBtn) {
          saveImgBtn.onclick = () => {
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = canvas.width;
            tempCanvas.height = canvas.height;
            const tCtx = tempCanvas.getContext('2d');
            tCtx.fillStyle = '#020617';
            tCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
            tCtx.drawImage(canvas, 0, 0);

            const link = document.createElement('a');
            link.download = `math001_scratchpad_${Date.now()}.png`;
            link.href = tempCanvas.toDataURL('image/png');
            link.click();
          };
        }

        window.addEventListener('resize', resizeCanvas);
      },

      // ==========================================
      // SCIENTIFIC CALCULATOR ENGINE
      // ==========================================
      initCalculator() {
        const modal = document.getElementById('modal-calculator');
        const exprEl = document.getElementById('calc-expr');
        const resEl = document.getElementById('calc-result');

        let expression = "";

        const openCalc = () => modal.classList.remove('hidden', 'flex') || modal.classList.add('flex');
        const closeCalc = () => modal.classList.add('hidden') || modal.classList.remove('flex');

        document.getElementById('btn-toggle-calculator').onclick = openCalc;
        document.getElementById('btn-close-calc').onclick = closeCalc;

        const evaluateSafe = (expr) => {
          try {
            if (!expr) return "0";
            // Replace human math terms with safe JavaScript Math functions
            let sanitized = expr
              .replace(/π/g, 'Math.PI')
              .replace(/e/g, 'Math.E')
              .replace(/sqrt\(/g, 'Math.sqrt(')
              .replace(/cbrt\(/g, 'Math.cbrt(')
              .replace(/abs\(/g, 'Math.abs(')
              .replace(/\^/g, '**');

            // Strictly whitelist allowable characters for security
            if (!/^[0-9+\-*/().\s,MathPIEsqrtcbrtabs*]+$/.test(sanitized)) {
              return "Error";
            }

            const res = Function(`"use strict"; return (${sanitized})`)();
            if (res === Infinity || res === -Infinity || isNaN(res)) return "Undefined";
            return Number.isInteger(res) ? res.toString() : parseFloat(res.toFixed(6)).toString();
          } catch(e) {
            return "Error";
          }
        };

        document.querySelectorAll('.calc-key').forEach(btn => {
          btn.onclick = () => {
            const val = btn.getAttribute('data-val');

            if (val === 'C') {
              expression = "";
              exprEl.textContent = "";
              resEl.textContent = "0";
            } else if (val === 'DEL') {
              expression = expression.slice(0, -1);
              exprEl.textContent = expression;
            } else if (val === '=') {
              const ans = evaluateSafe(expression);
              resEl.textContent = ans;
              if (ans !== "Error" && ans !== "Undefined") {
                expression = ans;
              }
            } else if (val === 'sqrt') {
              expression += "sqrt(";
              exprEl.textContent = expression;
            } else if (val === 'cbrt') {
              expression += "cbrt(";
              exprEl.textContent = expression;
            } else if (val === 'abs') {
              expression += "abs(";
              exprEl.textContent = expression;
            } else if (val === 'sq') {
              expression += "^2";
              exprEl.textContent = expression;
            } else if (val === 'inv') {
              expression = `1/(${expression || '1'})`;
              exprEl.textContent = expression;
            } else if (val === 'neg') {
              if (expression.startsWith('-')) {
                expression = expression.slice(1);
              } else {
                expression = '-' + expression;
              }
              exprEl.textContent = expression;
            } else {
              expression += val;
              exprEl.textContent = expression;
              const live = evaluateSafe(expression);
              if (live !== "Error" && live !== "Undefined") {
                resEl.textContent = live;
              }
            }
          };
        });
      },

      // ==========================================
      // FORMULA CHEATSHEET DRAWER
      // ==========================================
      initCheatSheet() {
        const drawer = document.getElementById('drawer-cheatsheet');
        const content = document.getElementById('sheet-content-container');

        const openDrawer = () => {
          drawer.classList.remove('-translate-x-full');
          this.renderCheatSheet('P.1');
        };

        const closeDrawer = () => {
          drawer.classList.add('-translate-x-full');
        };

        document.getElementById('btn-toggle-cheatsheet').onclick = openDrawer;
        document.getElementById('btn-close-cheatsheet').onclick = closeDrawer;

        document.querySelectorAll('.sheet-tab').forEach(tab => {
          tab.onclick = () => {
            const mod = tab.getAttribute('data-sheet');
            document.querySelectorAll('.sheet-tab').forEach(t => {
              t.className = "sheet-tab px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300";
            });
            tab.className = "sheet-tab px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold";
            this.renderCheatSheet(mod);
          };
        });
      },

      renderCheatSheet(mod) {
        const data = CHEATSHEET_DATA[mod];
        const container = document.getElementById('sheet-content-container');
        if (!data) return;

        container.innerHTML = `
          <div class="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-xs font-bold text-cyan-400">
            ${data.title}
          </div>
        `;

        data.cards.forEach(c => {
          const card = document.createElement('div');
          card.className = "bg-slate-950/80 p-4 rounded-2xl border border-slate-800 flex flex-col gap-2 shadow-md";
          card.innerHTML = `
            <h4 class="font-bold text-xs text-emerald-400 uppercase tracking-wider">${c.title}</h4>
            <div class="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">${c.content}</div>
          `;
          container.appendChild(card);
        });

        this.renderMath(container);
      },

      // ==========================================
      // EVENT BINDINGS
      // ==========================================
      bindEvents() {
        // Mode Tabs
        const tabs = [
          { btn: 'tab-btn-chapter', mode: 'chapter', view: 'view-chapter' },
          { btn: 'tab-btn-exam', mode: 'exam', view: 'view-exam' },
          { btn: 'tab-btn-mistakes', mode: 'mistakes', view: 'view-mistakes' },
          { btn: 'tab-btn-bookmarks', mode: 'bookmarks', view: 'view-bookmarks' }
        ];

        tabs.forEach(t => {
          document.getElementById(t.btn).onclick = () => {
            this.mode = t.mode;
            tabs.forEach(o => {
              const b = document.getElementById(o.btn);
              const v = document.getElementById(o.view);
              if (o.mode === t.mode) {
                b.className = "nav-tab px-3.5 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold flex items-center gap-1.5 shrink-0 transition";
                v.classList.remove('hidden');
              } else {
                b.className = "nav-tab px-3.5 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 flex items-center gap-1.5 shrink-0 transition";
                v.classList.add('hidden');
              }
            });

            if (t.mode === 'chapter') {
              this.applyFilters();
              this.renderCurrentQuestion();
            } else if (t.mode === 'mistakes') {
              this.renderMistakesView();
            } else if (t.mode === 'bookmarks') {
              this.renderBookmarksView();
            }
          };
        });

        // Module filter pills
        document.querySelectorAll('.mod-pill').forEach(btn => {
          btn.onclick = () => {
            this.moduleFilter = btn.getAttribute('data-module');
            document.querySelectorAll('.mod-pill').forEach(b => {
              b.className = "mod-pill px-3 py-1.5 rounded-xl font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition";
            });
            btn.className = "mod-pill px-3 py-1.5 rounded-xl font-bold bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 transition";
            this.currentQuestionIdx = 0;
            this.applyFilters();
            this.renderCurrentQuestion();
          };
        });

        // Difficulty filter buttons
        document.querySelectorAll('.diff-btn').forEach(btn => {
          btn.onclick = () => {
            this.diffFilter = btn.getAttribute('data-diff');
            document.querySelectorAll('.diff-btn').forEach(b => {
              b.className = "diff-btn px-2.5 py-1 rounded-lg font-semibold text-slate-400 hover:text-white";
            });
            btn.className = "diff-btn px-2.5 py-1 rounded-lg font-semibold bg-slate-800 text-white";
            this.currentQuestionIdx = 0;
            this.applyFilters();
            this.renderCurrentQuestion();
          };
        });

        // Navigation
        document.getElementById('btn-prev-q').onclick = () => {
          if (this.currentQuestionIdx > 0) {
            this.currentQuestionIdx--;
            this.renderCurrentQuestion();
          }
        };

        document.getElementById('btn-next-q').onclick = () => {
          if (this.currentQuestionIdx < this.filteredQuestions.length - 1) {
            this.currentQuestionIdx++;
            this.renderCurrentQuestion();
          }
        };

        document.getElementById('btn-random-q').onclick = () => {
          if (this.filteredQuestions.length > 1) {
            let nextIdx;
            do {
              nextIdx = Math.floor(Math.random() * this.filteredQuestions.length);
            } while (nextIdx === this.currentQuestionIdx);
            this.currentQuestionIdx = nextIdx;
            this.renderCurrentQuestion();
          }
        };

        // Bookmark Toggle in Chapter Mode
        document.getElementById('q-btn-bookmark').onclick = () => {
          const q = this.filteredQuestions[this.currentQuestionIdx];
          if (!q) return;
          if (this.bookmarks.has(q.id)) {
            this.bookmarks.delete(q.id);
          } else {
            this.bookmarks.add(q.id);
          }
          this.saveStorage();
          this.updateStatsUI();
          this.renderCurrentQuestion();
        };

        // Language toggle
        document.getElementById('btn-lang-toggle').onclick = () => {
          if (this.lang === 'bi') this.lang = 'ar';
          else if (this.lang === 'ar') this.lang = 'en';
          else this.lang = 'bi';

          this.saveStorage();
          this.updateStatsUI();
          this.renderCurrentQuestion();
        };

        // Question Grid Modal
        const gridModal = document.getElementById('modal-grid');
        document.getElementById('btn-open-grid').onclick = () => {
          gridModal.classList.remove('hidden');
          gridModal.classList.add('flex');
          this.renderGridItems();
        };
        document.getElementById('btn-close-grid').onclick = () => {
          gridModal.classList.add('hidden');
          gridModal.classList.remove('flex');
        };

        // Export progress (JSON Backup)
        const btnExport = document.getElementById('btn-export-data');
        if (btnExport) {
          btnExport.onclick = () => {
            const backupData = {
              version: '1.0',
              exportDate: new Date().toISOString(),
              solved: this.solved,
              bookmarks: Array.from(this.bookmarks),
              mistakes: Array.from(this.mistakes),
              stats: this.stats
            };
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", `math001_progress_backup_${new Date().toISOString().slice(0, 10)}.json`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
          };
        }

        // Import progress (JSON Restore)
        const btnImport = document.getElementById('btn-import-data');
        const fileInput = document.getElementById('file-import-input');
        if (btnImport && fileInput) {
          btnImport.onclick = () => fileInput.click();
          fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
              try {
                const imported = JSON.parse(event.target.result);
                if (imported.solved) this.solved = imported.solved;
                if (imported.bookmarks) this.bookmarks = new Set(imported.bookmarks);
                if (imported.mistakes) this.mistakes = new Set(imported.mistakes);
                if (imported.stats) this.stats = imported.stats;
                this.saveStorage();
                this.updateStatsUI();
                this.applyFilters();
                this.renderCurrentQuestion();
                alert("تم استيراد تقدمك وبياناتك بنجاح!");
              } catch(err) {
                alert("حدث خطأ أثناء قراءة ملف النسخة الاحتياطية. تأكد من صحة الملف.");
              }
            };
            reader.readAsText(file);
          };
        }

        // Reset progress
        document.getElementById('btn-reset-data').onclick = () => {
          if (confirm("هل أنت متأكد من رغبتك في إعادة تعيين جميع الإجابات والنتائج السابقة؟ (لا يمكن التراجع)")) {
            localStorage.clear();
            this.solved = {};
            this.bookmarks = new Set();
            this.mistakes = new Set();
            this.stats = { streak: 0, lastSolveDate: null };
            this.currentQuestionIdx = 0;
            this.applyFilters();
            this.updateStatsUI();
            this.renderCurrentQuestion();
          }
        };

        // Clear mistakes button
        document.getElementById('btn-clear-mistakes').onclick = () => {
          if (confirm("هل أنت متأكد من مسح جميع الأسئلة من بنك الأخطاء؟")) {
            this.mistakes.clear();
            this.saveStorage();
            this.updateStatsUI();
            this.renderMistakesView();
          }
        };

        // Exam Mode events
        document.getElementById('btn-start-exam').onclick = () => this.startExam();
        document.getElementById('btn-exam-prev').onclick = () => {
          if (this.exam.currentIdx > 0) {
            this.exam.currentIdx--;
            this.renderExamPalette();
            this.renderExamQuestion();
          }
        };
        document.getElementById('btn-exam-next').onclick = () => {
          if (this.exam.currentIdx < this.exam.questions.length - 1) {
            this.exam.currentIdx++;
            this.renderExamPalette();
            this.renderExamQuestion();
          }
        };
        document.getElementById('btn-exam-flag').onclick = () => {
          if (this.exam.flagged.has(this.exam.currentIdx)) {
            this.exam.flagged.delete(this.exam.currentIdx);
          } else {
            this.exam.flagged.add(this.exam.currentIdx);
          }
          this.renderExamPalette();
          this.renderExamQuestion();
        };
        document.getElementById('btn-exam-submit').onclick = () => this.submitExam(false);
        document.getElementById('btn-retake-exam').onclick = () => this.startExam();

        // Exam review filters
        document.getElementById('filter-review-all').onclick = () => this.renderExamReviewList('all');
        document.getElementById('filter-review-wrong').onclick = () => this.renderExamReviewList('wrong');
        document.getElementById('filter-review-correct').onclick = () => this.renderExamReviewList('correct');

        // Keyboard navigation
        window.addEventListener('keydown', (e) => {
          // Ignore if user is typing in an input
          if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

          if (this.mode === 'chapter') {
            if (e.key === 'ArrowRight') document.getElementById('btn-prev-q').click();
            if (e.key === 'ArrowLeft') document.getElementById('btn-next-q').click();

            // Hotkeys A, B, C, D or 1, 2, 3, 4
            const key = e.key.toUpperCase();
            const map = { 'A': 0, '1': 0, 'B': 1, '2': 1, 'C': 2, '3': 2, 'D': 3, '4': 3 };
            if (map[key] !== undefined) {
              const q = this.filteredQuestions[this.currentQuestionIdx];
              if (q && !this.solved[q.id]) {
                this.handleOptionSelect(q, map[key]);
              }
            }
          } else if (this.mode === 'exam' && this.exam.active) {
            if (e.key === 'ArrowRight') document.getElementById('btn-exam-prev').click();
            if (e.key === 'ArrowLeft') document.getElementById('btn-exam-next').click();

            const key = e.key.toUpperCase();
            const map = { 'A': 0, '1': 0, 'B': 1, '2': 1, 'C': 2, '3': 2, 'D': 3, '4': 3 };
            if (map[key] !== undefined) {
              this.exam.answers[this.exam.currentIdx] = map[key];
              this.renderExamPalette();
              this.renderExamQuestion();
            }
          }
        });
      },

      renderGridItems() {
        const container = document.getElementById('grid-items-container');
        container.innerHTML = "";

        this.filteredQuestions.forEach((q, idx) => {
          const btn = document.createElement('button');
          btn.className = "h-11 rounded-xl font-mono text-xs font-bold transition flex items-center justify-center border";

          const record = this.solved[q.id];
          const isCurrent = (this.currentQuestionIdx === idx);

          let bg = "bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700";
          if (record) {
            if (record.isCorrect) {
              bg = "bg-emerald-950 text-emerald-300 border-emerald-500/50";
            } else {
              bg = "bg-rose-950 text-rose-300 border-rose-500/50";
            }
          }

          if (isCurrent) {
            btn.className += ` ring-2 ring-cyan-400 ${bg}`;
          } else {
            btn.className += ` ${bg}`;
          }

          btn.textContent = idx + 1;
          btn.onclick = () => {
            this.currentQuestionIdx = idx;
            this.renderCurrentQuestion();
            document.getElementById('modal-grid').classList.add('hidden');
            document.getElementById('modal-grid').classList.remove('flex');
          };

          container.appendChild(btn);
        });
      }
    };

    // Initialize application when DOM and KaTeX are loaded
    window.addEventListener('DOMContentLoaded', () => {
      App.init();
    });


