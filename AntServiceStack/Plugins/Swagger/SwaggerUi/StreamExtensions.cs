﻿using System.Collections.Generic;
using System.IO;
using System.Text;

namespace AntServiceStackSwagger.SwaggerUi
{
    public static class StreamExtensions
    {
        public static Stream FindAndReplace(this Stream stream, IDictionary<string, string> replacements)
        {
            var originalText = new StreamReader(stream).ReadToEnd();
            var outputBuilder = new StringBuilder(originalText);

            foreach (var replacement in replacements)
            {
                outputBuilder.Replace(replacement.Key, replacement.Value);
            }

            return new MemoryStream(Encoding.UTF8.GetBytes(outputBuilder.ToString()));
        }

        public static string GetText(this Stream stream)
        {
            return new StreamReader(stream).ReadToEnd();
        }
    }
}