using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API;

public static class Seed
{
    public static async Task SeedUsers(DataContext context) {
        if(await context.Users.CountAsync() > 0) return;

        var userData = await File.ReadAllTextAsync("Data/UserSeedData.json");

        var users = JsonSerializer.Deserialize<List<AppUser>>(userData);

        foreach(var user in users){
            var hmac = new HMACSHA512();

            user.UserName = user.UserName.ToLower();
            user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("P@ssw0rd"));
            user.PasswordSalt = hmac.Key;

            context.Users.Add(user);

            await context.SaveChangesAsync();

        }
    }
}
