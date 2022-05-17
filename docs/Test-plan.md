# Test Plan

To make sure that the application is working properly we need to test the following scenarios:

## It should have 9 digits

### Positive

> Welcome
>
> Introduce a Social Security Number: 123-01-9999
>
> Valid

### Negative

> Welcome
>
> Introduce a Social Security Number: 12-01-9999
>
> Invalid

## It should be divided into 3 parts by hyphen (-)

### Positive

> Welcome
>
> Introduce a Social Security Number: 100-01-0001
>
> Valid

### Negative

> Welcome
>
> Introduce a Social Security Number: 100.01.0001
>
> Invalid

## The first part should have 3 digits and should not be 000, 666, or between 900 and 999

### Positive

> Welcome
>
> Introduce a Social Security Number: 129-11-9123
>
> Valid

### Negative

> Welcome
>
> Introduce a Social Security Number: 000-11-9123
>
> Invalid

Also:

> Welcome
>
> Introduce a Social Security Number: 666-11-9123
>
> Invalid

Also:

> Welcome
>
> Introduce a Social Security Number: 912-11-9123
>
> Invalid

## The second part should have 2 digits and it should be from 01 to 99

### Positive

> Welcome
>
> Introduce a Social Security Number: 143-31-8121
>
> Valid

### Negative

> Welcome
>
> Introduce a Social Security Number: 143-00-8121
>
> Invalid

## The third part should have 4 digits and it should be from 0001 to 9999

### Positive

> Welcome
>
> Introduce a Social Security Number: 431-63-3756
>
> Valid

### Negative

> Welcome
>
> Introduce a Social Security Number: 431-63-0000
>
> Invalid
