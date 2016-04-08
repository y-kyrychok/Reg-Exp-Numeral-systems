1.
0xfff
0xab34209ab
0x00001

/[+-]?0x([a-f]|\d)+/igm

2.
0o641177443
0o12341230
0o00000


/[+-]?0o\d[0-7]+/igm

3.
0b0000001111
0b1111110001
0b1101010101

/[+-]?0b\d[0-1]+/igm



4.

`{ 1 + 1}`
"Hello, my name is ${1 + 1}".replace(..., function()
{
	return eval(match)
})

