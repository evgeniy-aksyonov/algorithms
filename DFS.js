const graph = {};

graph['you'] = ['bob', 'claire', 'alice'];
graph['bob'] = ['peggie', 'anush'];
graph['alice'] = ['peggie'];
graph['claire'] = ['tom', 'jonny'];
graph['anush'] = [];
graph['peggie'] = [];
graph['tom'] = [];
graph['jonny'] = [];

function person_is_seller(name) {
  return name[name.length-1] === 'm';
}

function search(name) {
  let search_queue = [];
  search_queue = search_queue.concat(graph[name]);

  const already_searched = [];

  while (search_queue.length) {
    let person = search_queue.shift();

    if (already_searched.indexOf(person) === -1) {
      if (person_is_seller(person)) {
        console.log(`${person} is a mango seller`);
        return true;
      } else {
        search_queue = search_queue.concat(graph[person]);
        already_searched.push(person);
      }
    }
  }
  console.log('false');
  return false;
}

search('you');
