import { reactive, computed, watch } from 'vue';

export default function (count) {

  const user = reactive({ name: 'tofiq', last: 'hamzai' });

  watch(
    () => user.last, 
    (newUserLast, oldUserLast) => {
      console.log('new value: ', newUserLast);
      console.log('old value: ', oldUserLast);
    }
  );
  
  const fullName = computed({
    get: () => user.name + ' ' + user.last,
    set: (value) => {
      const [name, last] = value.split(' ');
      user.name = name;
      user.last = last;
    }
  });

  
  const handleClick = () => {
    count.value++;
  }

  return {
    user,
    fullName,
    handleClick
  }
}

