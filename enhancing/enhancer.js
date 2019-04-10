module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement === 20) {
    return {
      ...item
    }
  }
    
  return { ...item,
      enhancement: item.enhancement + 1,
    };
}

function fail(item) {
  let newEnhancement = item.enhancement;
  let newDurability = item.durability;
  
  if (newEnhancement < 15) {
    newDurability -= 5;
  } 
  if (newEnhancement >= 15) {
    newDurability -= 10;
  }
  if (newEnhancement > 16) {
    newEnhancement -= 1;
  }

  return {
    ...item,
    enhancement: newEnhancement,
    durability: newDurability,
  }
   
}

function repair(item) {
  return { ...item,
    durability: 100,
  };
}

function get(item) {
  let newName = item.name;
  if (item.enhancement > 0) {
    newName = `[+${item.enhancement}] ${item.name}`;
  }

  return {
    ...item,
    name: newName,
  }
}
