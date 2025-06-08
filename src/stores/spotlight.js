import { deepMap } from 'nanostores'

export const $Spotlight = deepMap({
    fid: 1337,
})

export function addProfile(profile) {
    $profiles.set([...$profiles.get(), profile])
}
