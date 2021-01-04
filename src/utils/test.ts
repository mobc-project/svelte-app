import { get } from 'svelte/store';
import { setting, Isetting } from '../stores/setting'
let t: Isetting = get(setting)
console.log(t.name)