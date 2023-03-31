import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import {
	challenge,
	ChallengeCreateForm,
	ChallengeInfo,
	ChallengeLabel,
} from "@/lib/api/challenge";
import { id2timestamp } from "@/lib/id";

export const useChallengeStore = defineStore("challenge", () => {
	const list = reactive<ChallengeInfo[]>([]);

	function update_info(...info: ChallengeInfo[]) {
		for (const i of info) {
			const idx = list.findIndex((v) => v.id === i.id);
			if (idx > -1) list[idx] = i;
			else list.push(i);
		}
		list.sort((a, b) => id2timestamp(b.id) - id2timestamp(a.id));
	}

	function load(id: string) {
		return new Promise<ChallengeInfo>((resolve, reject) => {
			const idx = list.findIndex((v) => v.id === id);
			if (idx > -1) return resolve(list[idx]);
			challenge
				.get(id)
				.then((d) => {
					update_info(d.data);
					resolve(d.data);
				})
				.catch(reject);
		});
	}
	function get(id: string) {
		const info = ref<null | ChallengeInfo>(null);
		load(id).then((d) => (info.value = d));
		return info;
	}

	function get_list(label: ChallengeLabel) {
		return new Promise<ChallengeInfo[]>((resolve, reject) => {
			challenge
				.list(label)
				.then((d) => {
					update_info(...d.data);
					resolve(d.data);
				})
				.catch(reject);
		});
	}

	function create(creator: string, data: ChallengeCreateForm) {
		return new Promise<ChallengeInfo>((resolve, reject) => {
			challenge
				.create(data)
				.then((d) => {
					const id = d.data.id;
					const info = {
						creator,
						id,
						...data,
					};
					update_info(info);
					resolve(info);
				})
				.catch(reject);
		});
	}

	function update(info: ChallengeInfo) {
		return new Promise<ChallengeInfo>((resolve, reject) => {
			challenge
				.update(info.id, info)
				.then(() => {
					update_info(info);
					resolve(info);
				})
				.catch(reject);
		});
	}

	return { list, get_list, create, get, load, update };
});
