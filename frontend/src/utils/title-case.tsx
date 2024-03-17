export function titleCase(str: any): string {
    let update = str?.toLowerCase().split(' ');
    for (let i = 0; i < update?.length; i++) {
        update[i] = update[i]?.charAt(0)?.toUpperCase() + update[i]?.slice(1);
    }
    return update?.join(' ');
}
