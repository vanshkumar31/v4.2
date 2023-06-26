#include <stdio.h>
#include <math.h>

int main() {
    int i, num;
    
    for (i = 2; i <= 300; i++) {
        int isPrime = 1; // Assume i is prime
        
        for (num = 2; num <= sqrt(i); num++) {
            if (i % num == 0) {
                isPrime = 0; // i is divisible by num, hence not prime
                break;
            }
        }
        
        if (isPrime == 1) {
            printf("%d\t", i);
        }
    }
    
    return 0;
}
