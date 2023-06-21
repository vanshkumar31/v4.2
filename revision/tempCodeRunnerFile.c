#include <stdio.h>
#include<math.h>
int main()
{
    float sum, eq, ans;
    // for (float x = 2; x < 8; x++)
    // {
        
    //     // ans = ans + sum;
    //     // printf("ans-->%f\n", ans);
    // }
    int x=3;
    eq = (x - 1) / x;

    for (int i = 2; i < 8; i++)
    {
        float power = pow(eq, i);
        // sum = eq + power+sum;
        sum = sum + .5 * power;
    }
    printf("sum-->%f\n", sum);
    return 0;
}