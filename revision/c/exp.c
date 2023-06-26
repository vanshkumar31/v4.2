#include <stdio.h>
#include <math.h>
// int fac(int);//problem 10
// int power(int,int); // problem 11
// int prime_factor(int); // problem 12
// int rec_sum(int); // problem 13
int rec_prime_fac(int);//problem 14
int main()
{
    // 1st problem

    // a0==1189*841
    // a1==841*594
    // 2nd problem
    /*
    int amount,oners,twors,fivers,tenrs,fiftyrs,hunrs,total;
    printf("Enter the amount:->");
    scanf("%d",&amount);
    hunrs=amount/100;
    amount=amount%100;//we use remainder
    fiftyrs=amount/50;//here we got new amount
    amount=amount%50;
    tenrs=amount/10;
    amount = amount % 10;
    fivers=amount/5;
    amount = amount % 5;
    twors=amount/2;
    amount = amount % 2;
    oners=amount;
    total=hunrs+fiftyrs+tenrs+fivers+twors+oners;
    printf("\nno. of Hundred notes :->%d",hunrs);
    printf("\nno. of Fifty notes :->%d", fiftyrs);
    printf("\nno. of Ten notes :->%d", tenrs);
    printf("\nno. of Two notes :->%d", twors);
    printf("\nno. of one notes :->%d", oners);
printf("\nTotal no. of notes are:->%d",total);
*/
    // 3rd problem
    /*
    int digit,d1,d2,d3,d4,d5,sum;
    printf("Enter any five digit no.");
    scanf("%d",&digit);
    d1=digit/10000;
    digit=digit%10000;
    d2=digit/1000;
    digit=digit%1000;
    d3=digit/100;
    digit=digit%100;
    d4=digit/10;
    digit=digit%10;
    d5=digit;
 sum=d1+d2+d3+d4+d5;
 printf("%d",sum);*/
    // 4th problem
    /*
    int year;//find the leap year it should properly (remainder==0) divisible by 4 but in it case of 100 we need to add one more condition
    printf("Enter any year ");
    scanf("%d", &year);

    if (year % 100==0)//here we use modulas because it gives remainder to find the term like 1600,1700,1800...
    {
        if (year % 400==0)
        {
            printf("%d is a leap year", year);
        }
        else
        {
            printf("%d is not a leap year",year);
        }
    }
    else if (year % 4==0)
    {
        printf("%d is  a Leap year", year);
    }
    else
    {
        printf("%d is not a leap year",year);
    }
*/
    // 5th problem
    /*
        int i = 1;

        while (i <= 500)
        {
            int no, first_digit, sec_digit, third_digit, new = i;
            first_digit = new / 100;
            new = new % 100;
            sec_digit = new / 10;
            new = new % 10;
            third_digit = new;
            no = (first_digit * first_digit * first_digit) + (sec_digit * sec_digit * sec_digit) + (third_digit * third_digit * third_digit);

            if (i == no)
            {
                printf("%d This no. is Armstrong number\n", i);
            }
            // printf("value of i-->%d value of sum-->%d\n", new, no);
            i++;
        }
    */
    // 6th problem(prime no.)
    /*
// int i=1;
    for (int i = 2; i < 301; i++)
        for (int num = 2; num < i; num++)
        {

            if (i == num)
            {
                printf("i am here");
                printf("%d\n this no. is prime", i);
            }
            // if (i % num == 0)
            // {
            //     break;
            // }
        }

    */
    // 7th problem
    /*int input;
    printf("Enter the no.");
    scanf("%d", &input);
    int fac = 1;
    for (int i = 1; i <= input; i++)
    {
    fac = fac * i;
    }
    printf("%d",fac);

    */
    // 8th problem
    /*
    float sum = 0.0;
    for (int i = 1; i < 8; i++)
    {float s;
        float  fac = 1;
        for (float j = 1; j <= i; j++)
        {
            fac = fac * j;
        }
        s = (i / fac);

        sum = sum + s;
    }
    printf("sum-->%f", sum);
    */
    // 9th problem
    /*
    float sum,eq,ans;
    for (float x= 2; x < 8; x++)
    {
        eq = (x - 1) / x;

        for (int i = 2; i < 8; i++)
        {
            float power = pow(eq, i);
            sum = sum + .5 * power;
        }
        ans = ans +sum;
            printf("ans-->%f\n", ans);
            printf("sum-->%f\n", sum);
    }
    */
    // 10th problem
    /*
    int num;
    printf("Enter any no. ");
    scanf("%d", &num);
    int a=fac(num);
    printf("%d",a);*/
    // 11th problem
    /*
    int num,pow;
    printf("Enter the number :->");
    scanf("%d",&num);

    printf("Enter the power :->");
    scanf("%d",&pow);
    int a=power(num,pow);
    printf("%d",a);*/
    // 12th problem
    /*int num;
    printf("Enter some number:->");
    scanf("%d",&num);
     prime_factor(num);
      */
    // 13th problem
    /*int five_sum;

       printf("\nEnter the no. which sum you want :->");
       scanf("%d", &five_sum);
       int sum = rec_sum(five_sum);
       printf("%d\n", sum);*/
    // problem 14
int prime_fac_input;
printf("Enter the no. get the prime factor:-> ");
scanf("%d",&prime_fac_input);
int prim=rec_prime_fac(prime_fac_input);
printf("%d",prim);

    return 0;
}
// problem 10
/*int fac(int num)
{
    int fact = 1;
    for (int i = 1; i < num+1; i++)
    {

        fact=fact*i;
    }
    return fact;
}
*/
// problem 11
/*int power(int num,int pow){
    int numm=1;
for (int i = 1 ; i < pow+1; i++)
{
    numm=numm*num;
}return numm;

}*/
// problem 12
/*int prime_factor(int num){
    int new_num = num;
    int i = 2;
    while (new_num>=i)

    {
        // printf("i%d\t",new_num);

        if (new_num % i == 0)
        {
            printf("%d\t", i);
        new_num = new_num / i;
        // printf("num->%d\n",new_num);

        }
        else
        {
         i++;
        }


    }


}*/
// problem 13
/*int rec_sum(int num)
{
    int intial, s;
    if (num != 0)
    {
        s = num % 10;

        intial = s + rec_sum(num / 10);
        }
    else
    {
        return 0;
    }
    return intial;
}
*/
//problem 14
int rec_prime_fac(int num){
    
}