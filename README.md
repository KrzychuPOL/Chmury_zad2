# Zadanie 2 - laboratorium Technologie Chmurowe .

## Schemat architektury

![docs](./arch.png)



### Wzór ciągu geometrycznego

Wartości wyrazów ciągu obliczane są wzorem:

```
a(n) = a(1) * q^(n-1)
```

gdzie:

1. n - numer wyrazu
2.  a(1) - pierwszy wyraz ciągu
3.  q - iloraz ciągu.

Wyrazy a(1) i q są stałymi definiującymi ciąg. Ustawienie ich jako zmienne środowiskowe możliwe jest dla kontenera worker (do ustawienia w pliku `.env`)
1. a(1) to zmienna `TCH_A1`,
2. q to zmienna `TCH_Q`.
