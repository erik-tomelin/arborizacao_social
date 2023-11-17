import { Injectable } from '@angular/core'
import {
    AuthChangeEvent,
    AuthSession,
    createClient,
    Session,
    SupabaseClient,
    User,
} from '@supabase/supabase-js'
import { environment } from 'environments/environment'

export interface Profile {
    id?: string
    username: string
    website: string
    avatar_url: string
}

@Injectable({
    providedIn: 'root',
})
export class SupabaseService {
    public supabase: SupabaseClient
    _session: AuthSession | null = null

    constructor() {
        this.supabase = createClient(environment.supabase.url, environment.supabase.key)
    }

    get session() {
        this.supabase.auth.getSession().then(({ data }) => {
            this._session = data.session
        })
        return this._session
    }

    // downLoadImage(path: string) {
    //     return this.supabase.storage.from('avatars').download(path)
    // }

    // uploadAvatar(filePath: string, file: File) {
    //     return this.supabase.storage.from('avatars').upload(filePath, file)
    // }
}