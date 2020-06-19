# Poker Api

### How can I run?

```sh
  yarn && yarn dev
```

#### Rules:

- O formado do body dever ser

```json
{
  "hands": [
    ["Ad", "As", "Ac", "Ah", "Qs"],
    ["2d", "3s", "4c", "5h", "6d"]
  ]
}
```

- As cartas não podem ser repeditas
- Cada mão deve conter 5 cartas
- O deck contem as seguintes cartas

```
 [
  '1d', '2d', '3d',  '4d', '5d', '6d', '7d',
  '8d', '9d', '10d', 'Jd', 'Qd', 'Kd', 'Ad',
  '1s', '2s', '3s',  '4s', '5s', '6s', '7s',
  '8s', '9s', '10s', 'Js', 'Qs', 'Ks', 'As',
  '1c', '2c', '3c',  '4c', '5c', '6c', '7c',
  '8c', '9c', '10c', 'Jc', 'Qc', 'Kc', 'Ac',
  '1h', '2h', '3h',  '4h', '5h', '6h', '7h',
  '8h', '9h', '10h', 'Jh', 'Qh', 'Kh', 'Ah'
]
```

## Routes

- Post htttp://localhost:5000/poker

## Description

Projeto desenvolvido em _typescript_
