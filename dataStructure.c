
#include<stdio.h>
#include<stdlib.h>
typedef struct element{
    int x;
    struct element *next;
}element;
void createElement(int a){
    element *p=(element *)malloc(sizeof(element));
    p->x=a;
    p->next=NULL;
}
int main(){
    int *x=(int *)malloc(10*sizeof(int));
    return 0;
}