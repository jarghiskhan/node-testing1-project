const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const originalObject = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const actual = utils.trimProperties(originalObject);
    expect(originalObject).not.toEqual(actual);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[1] returns an object with the properties trimmed", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const actual = utils.trimPropertiesMutation(input);
    // expect(actual).toBe(utils.trimPropertiesMutation(input))
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects [{ integer: 1 }, { integer: 3 }, { integer: 2 }]", () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    const output = utils.findLargestInteger(input);
    expect(output).toEqual(3);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    const output = counter.countDown();
    expect(output).toEqual(3);
  });

  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    const output = counter.countDown();
    expect(output).toEqual(2);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    const output = counter.countDown();
    expect(output).toEqual(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  let output;
  let i = 0;
  beforeEach(() => {
    output = "";
    i = 0;
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    do {
      output = seasons.next();
      i++;
    } while (i < 1);

    expect(output).toEqual("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    do {
      output = seasons.next();
      i++;
    } while (i < 2);
    expect(output).toEqual("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    do {
      output = seasons.next();
      i++;
    } while (i < 3);
    expect(output).toEqual("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    do {
      output = seasons.next();
      i++;
    } while (i < 4);
    expect(output).toEqual("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    do {
      output = seasons.next();
      i++;
    } while (i < 5);
    expect(output).toEqual("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    do {
      output = seasons.next();
      i++;
    } while (i < 40);
    expect(output).toEqual("spring");
  });
});

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(100)
    expect(focus.odometer).toEqual(100)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(100)
    expect(focus.gas).toBeLessThan(20)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600) //drive till empty
    focus.drive(600) //try to drive more
    focus.refuel(30) //fill up tank
    focus.drive(100) //drive 100 more miles
    expect(focus.odometer).toEqual(700)
    
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(1)
    expect(focus.gas).toEqual(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const input = await utils.isEvenNumberAsync(2)
    expect(input).toEqual(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const input = await utils.isEvenNumberAsync(3)
    expect(input).toEqual(false)
  })
})
