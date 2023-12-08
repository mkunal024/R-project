# calculate.R

args <- commandArgs(TRUE)
num1 <- as.numeric(args[1])
num2 <- as.numeric(args[2])
operator <- as.character(args[3])

result <- switch(operator,
    '+' = num1 + num2,
    '-' = num1 - num2,
    '*' = num1 * num2,
    '/' = num1 / num2,
    stop("Invalid operator")
)

cat(result)
