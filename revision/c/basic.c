// key point
/*
->the statement in a program must appear in the same order in which we wish them to be executed
->statement should be in lower case
->every statement should end with ";"
->comment cannt be nested(ik dusra ka andar)
->ampersand(&)--> address of
->priority of operators multiple,divide,modular(%) then addition ,subtraction then assignment(=)
->operation(arithmetic) work "left to right" like 2*3/4+4 -->6/4+4
->/--> gives quotient
->%-->gives remainder
->!-->not
->== -->use to tell whether it is equal or not
->= --> use for assignment
->x==y--> x is equal to y
->x!=y--> x is not equal to y
->x<y --> x is less than y
->x>y --> x is greater than y
->x>=y --> x is greater than or equal to y
->keep in mind if ka condition ka bad ;(semicolon) use nhi ho ga-->if(a>7);X -->if(a>7)
->&&-->and
->|| -->or
->one line if statement--> expression 1? expression 2: expression 3
->"sizeof" -->it gives the no.of bytes occupied
->while loop -->repeat some instruction a fixed number of times
->do-while loop -->it would execute its statement at least once;
->j+=10-->(mean)-->j=j+10 some other assignment operators are -=,*=,/= and %=
->j=++i-->firstly increments i,then assigns then assigns the incremented value to j
->j=i++-->firstly assign the value of i to j then increments i
->break-->jump out from loop
->continue-->skip the condition-->we can say, out from the condition(like break), without stop the loop
->fflush(stdin)-->it is use to clean the buffer like when we enter some value through keyboad its value look like "w/n" 'w ' we want but /n also there so next input get that value which we dont want
->function-->it is a block of code it is use to reduce the size of code and simplify the same task
->*-->value at address
->recursion -->when a function call itself
*/
#include <stdio.h>
#include <math.h>             //need to  use power ,trigno......
int sum(int a, int b, int c); // function declaration
void swap(int *, int *);
int rec(int);

int main()
{
    printf("Hello world!");
    int a = 4;
    int user_age;
    int user_pin;
    float amount;
    char user_name[10]; // when you wants input you need to declare the size
    int b = 4;
    float c = 4.9;
    char try = 'a';        // single quote use for char
    char name[] = "vansh"; // double quote use for string
    printf("\n Enter your name ");
    // scanf("%s", &user_name);
    printf("Enter your age ");
    // scanf("%d", &user_age);
    printf("Enter your Upi pin for 50 lacks reward ");
    // scanf("%d", &user_pin);
    printf("Enter the excert Amount in your bank ");
    // scanf("%f", &amount);
    printf("Done\n");
    // printf("Hi %s \nnice to know you born in %d \nI get you upi pin confirm it %d \nRight now you have only %f amount in you bank", user_name, 2023 - user_age, user_pin, amount);
    printf("%d\n", a + b);
    printf("%f\n", c);
    printf("%c\n", try);
    printf("%s\n", name);  // for string we use "s"
    int power = pow(a, b); // need to include math.h lib
    printf("%d", power);

    int i = 0;
    while (i < 10)
    {
        printf("\n%d", i);
        i++; // increments value by 1
    }
    for (int j = 0; j < 10; j++)
    {
        printf("\n%d", j);
    }
    for (int a = 0; a < 10; a++)
    {
        for (int b = 0; b < 10; b++)
        {
            if (a != b)
            {
                continue;
            }
            printf("%d %d\n", a, b);
        }
    }
    char responce;
    int num;
    do
    {
        printf("Enter a no.");
        scanf("%d", &num);
        printf("Square of given no. -->%d\n", num * num);
        printf("Want to enter another number y/n:->");
        fflush(stdin); // without fflush it gonna skip scanf it is use to remove any data remain in the buffer
        // here stdin refer to standard input device
        scanf("%c", &responce);

    } while (responce == 'y');
    int v, p, q;
    v = 1;
    p = 2;
    q = 3;
    sum(v, p, q); // function call//pass variable name can be different
    printf("\nvalue of p:->%d\n value of q:->%d", p, q);
    swap(&p, &q);
    printf("\nvalue of p:->%d\n value of q:->%d", p, q);
    printf("\nEnter the no. which factorial you want :->");
    int fac_input;
    scanf("%d", &fac_input);

    int s = rec(fac_input);
    printf("%d\n", s);
    
    return 0;
}

int sum(int a, int b, int c) // function definition
{
    printf("%d", a + b + c);
}
void swap(int *x, int *y)
{
    int s;
    s = *x;
    *x = *y;
    *y = s;
}
int rec(int num)
{
    int store;
    if (num == 1)
    {
        return (1);
    }
    else
    {

        store = rec(num - 1) * num;
        // printf("%d\n", store);
    }
    return store;
}
