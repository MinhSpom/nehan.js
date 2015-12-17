describe("SingleTagSet", function(){
  it("SingleTagSet.add", function(){
    var set = new Nehan.SingleTagSet();
    set.add("foo");
    expect(set.length()).toBe(1);
    set.add("foo");
    expect(set.length()).toBe(1);
    set.add("hoge");
    expect(set.length()).toBe(2);
  });

  it("SingleTagSet.exists", function(){
    var set = new Nehan.SingleTagSet();
    set.add("hoge");
    expect(set.exists("hoge")).toBe(true);
    set.add("hige");
    expect(set.exists("hige")).toBe(true);
    expect(set.exists("foo")).toBe(false);
  });

  it("SingleTagSet.length", function(){
    var set = new Nehan.SingleTagSet();
    expect(set.length()).toBe(0);
    set.add("foo");
    expect(set.length()).toBe(1);
    set.add("foo");
    expect(set.length()).toBe(1);
    set.add("hoge");
    expect(set.length()).toBe(2);
  });

  it("SingleTagSet.isEmpty", function(){
    var set = new Nehan.SingleTagSet();
    expect(set.isEmpty()).toBe(true);
    set.add("foo");
    expect(set.isEmpty()).toBe(false);
    set.remove("foo");
    expect(set.isEmpty()).toBe(true);
  });

  it("SingleTagSet.remove", function(){
    var set = new Nehan.SingleTagSet();
    set.add("foo");
    set.add("hoge");
    expect(set.length()).toBe(2);
    set.remove("foo");
    expect(set.length()).toBe(1);
    set.remove("ouch"); // not found
    expect(set.length()).toBe(1);
    set.remove("hoge");
    expect(set.length()).toBe(0);
  });

  it("SingleTagSet.union", function(){
    var set1 = new Nehan.SingleTagSet();
    var set2 = new Nehan.SingleTagSet();
    set1.add("foo");
    set1.add("hoge");
    set1.add("hige");
    set2.add("hoge");
    set2.add("hige");
    set2.add("hage");

    var set3 = set1.union(set2);
    expect(set1.length()).toBe(3); // foo, hoge, hige
    expect(set2.length()).toBe(3); // hoge, hige, hage
    expect(set3.length()).toBe(4); // foo, hoge, hige, hage
    expect(set1 === set2).toBe(false);
    expect(set2 === set3).toBe(false);
    expect(set1 === set3).toBe(false);
  });

  it("member should be lower-cased", function(){
    var set = new Nehan.SingleTagSet();
    set.add("FOO");
    expect(set.exists("FOO")).toBe(false);
    expect(set.exists("foo")).toBe(true);
  });
});
