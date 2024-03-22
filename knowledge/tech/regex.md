---
---

# Regex

```
Positive Integers:        ^\d+$
Negative Integers:        ^-\d+$
Integers:                 ^-?\d+$
Lowercase letters only:   ^([a-z])*$
Uppercase letters only:   ^([A-Z])*$
Date (DD/MM/YYYY):        ^(0?[1–9]|[12][0–9]|3[01])[- /.](0?[1–9]|1[012])[- /.](19|20)?[0–9]{2}$
Date (MM/DD/YYYY):        ^(0?[1–9]|1[012])[- /.](0?[1–9]|[12][0–9]|3[01])[- /.](19|20)?[0–9]{2}$
Date (YYYY/MM/DD):        ^(19|20)?[0–9]{2}[- /.](0?[1–9]|1[012])[- /.](0?[1–9]|[12][0–9]|3[01])$

Username:     ^[\w.]{4,16}$
email:        ^([a-zA-Z0–9._%-]+@ [a-zA-Z0–9.-]+\.[a-zA-Z]{2,})*$

Passwords:
6 length, 1 lowercase, 1 uppercase, 1 number, 1 special character: /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{6,})/
6 length, 1 lowercase 1 uppercase, 1 number: /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{6,}$/
6 length, 1 lowercase, 1 uppercase: /^(?=.[a-z])(?=.[A-Z]).{6,}$/

Alpha-numeric characters:               ^[a-zA-Z0–9]*$
Alpha-numeric characters with spaces:   ^[a-zA-Z0–9 ]*$

IPv4 address:   ^((?:(?:25[0–5]|2[0–4][0–9]|[01]?[0–9][0–9]?)\.){3}(?:25[0–5]|2[0–4][0–9]|[01]?[0–9][0–9]?))*$
URL:            ^(((http|https|ftp):\/\/)?([[a-zA-Z0–9]\-\.])+(\.)([[a-zA-Z0–9]]){2,4}([[a-zA-Z0–9]\/+=%&_\.~?\-]*))*$

VISA credit card numbers:         ^(4[0–9]{12}(?:[0–9]{3})?)*$
MasterCard credit card numbers:   ^(5[1–5][0–9]{14})*$

Hashtags: Including hashtags with preceding text (abc123#xyz456) or containing white spaces within square brackets (#[foo bar]) : \S*#(?:\[[^\]]+\]|\S+)
@mentions: \B@ [a-z0–9_-]+
```

## Resources

- [https://regexr.com/](https://regexr.com/)
- [https://regex101.com/](https://regex101.com/)
