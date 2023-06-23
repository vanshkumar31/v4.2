#include <stdio.h>
int main()
{
    int i, num;
    for ( i = 2; i < 301; i++)
    {
        int isPrime = 1;
        for (int num = 2; num <= sqrt(i); num++)
        {
            if (i % num == 0)
            {
                isPrime = 0;
                break;
            }
           
        }
        if (isPrime == 1)
        {
            printf("%d\t", i);
        }
    }

    // int n;
    // printf("enter some no.");
    // scanf("%d", &n);
    // for (int i = 2; i <= n; i++)
    // {
    //     printf("%d\n", n % i);
    //     if (i == n)

    //     {
    //         printf("%d\t", n);
    //     }
    //     if (n % i == 0)
    //     {
    //         break;
    //     }

    //     printf("i am here");
    //     printf("\n%d", i);
    // }
    // printf("\n done");
    return 0;
}